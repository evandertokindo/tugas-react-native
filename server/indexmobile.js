const express = require('express');
const mysql = require('mysql');
const app = express();

const conn = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password : 'admin',
    database : 'dbtugas6',
})

app.use('/image', express.static('./images'))

app.get('/hello', (req, res)=> {
    res.json({ message: 'Hello!' })
})

app.post('/login', (req, res)=> {
    conn.query(`SELECT password FROM tb_login WHERE username = '${req.body.username}' AND password = '${req.body.password}'`, (err, rows)=> {
        console.log('a')
        console.log(rows)
        if(rows.length > 0) {
            console.log('b')
            const payload = {
                username : rows[0].username,
                id : rows[0].id
            }

            const token = jwt.sign(payload, secretKey, {expiresIn :'1d'})
            console.log({
                id : rows[0].id,
                token : token
            })
            res.json({
                id : rows[0].id,
                token : token
            })
        } else {
            console.log('c')
            res.status(400).json({message: 'Email atau password salah'})
        }
    })
})

app.post('/register', (req, res)=>{
    console.log('Masuk')
    var data = ({
        username : req.body.username,
        password : req.body.password
    })

    conn.query(`INSERT INTO tb_login SET ?`, data, (err, rows)=> {
            const payload = {
                id : rows.insertId,
                password : req.body.password,
        }
        
    const token = jwt.sign(payload, secretKey, {expiresIn:'1d'})

    res.json({
            id : data.username,
            token : token
        })
    })
})

exports.auth = (req, res, next)=> {
    try {
        const token = req.headers.authorization.split(" ")[1];
        req.userData = jwt.verify(token, secretKey);
        next()
    } catch {
        console.log(err);
        return res.status(401).json({message: ' Invalid JWT Token'});
    }
}

app.get('/daftarKategori', (req, res)=> {
    conn.query(`SELECT * FROM tb_kategori`, (err, rows)=> {
        res.json(rows)
    })
})

app.get('/daftarAnggota', (req, res)=> {
    conn.query(`SELECT * FROM tb_kelompok`, (err, rows)=> {
        res.json(rows)
    })
})

app.get('/panggil', (req, res)=>{
    conn.query('SELECT * FROM tb_artikel ORDER BY RAND()', (err, rows)=>{
        res.json(rows)
    })
})

app.get('/panggil/:kategori', (req, res)=> {
    conn.query(`SELECT * FROM tb_artikel WHERE kategori = ${req.params.kategori}`, (err, rows)=> {
        res.json(rows);
    })
})

conn.connect();

app.listen(8000, ()=> {
    console.log(`Listening on 8000`)
})

// create - post
// read - get
// update - put
// delete - delete

// if(rows[0].password !== undefined) {
//     res.json({ message: 'Login Berhasil' })
// }

    // conn.query(`INSERT INTO tb_login VALUES('(${req.body.username})', '(${req.body.password})')`, (err, rows)=> {
    //     res.json({message: 'Register Berhasil'})
    // })