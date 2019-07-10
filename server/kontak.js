const express = require('express');
const app = express();
const mysql = require('mysql')

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.use('/images', express.static(__dirname + '/images'));

app.get('/data', (req, res)=>{
    res.json(data);
})

const conn = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : '',
    database : 'dbujian'
})

app.get('/kontak', (req,res)=>{
    conn.query(`SELECT * FROM tb_kontak`, (err, rows)=>{
         res.json(rows);
    })
})

app.post('/kontak', (req, res)=>{
    var kontak = {
        nama_depan : req.body.nama_depan,
        nama_belakang : req.body.nama_belakang,
        email : req.body.email,
        nomor_hp : req.body.nomor_hp
    }

    conn.query(`INSERT INTO tb_kontak SET ?`, kontak, (err, result)=>{
        res.json(result)
    })
})

app.listen(8000, () => {
    console.log(`Server started on port 8000`);
});