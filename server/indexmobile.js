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
    conn.query(`SELECT password FROM tb_login WHERE username = '${req.body.username}'`, (err, rows)=> {
        if(rows[0].password !== undefined) {
            res.json({ message: 'Login Berhasil' })
        }
    })
})

app.post('/register', (req, res)=> {
    conn.query(`INSERT INTO tb_login VALUES('(${req.body.username})', '(${req.body.password})')`, (err, rows)=> {
        res.json({message: 'Register Berhasil'})
    })
})

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
    conn.query('SELECT * FROM tb_artikel', (err, rows)=>{
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