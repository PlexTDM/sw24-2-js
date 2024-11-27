import mysql from 'mysql'
import express from 'express'
import http from 'http'
import path from 'path'
import cors from 'cors'

const __dirname = path.resolve();
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const server = http.createServer(app)

const con = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: "UP06310639"
});
  
con.connect((err)=>{
    if (err) throw err;
    console.log("Connected to mysql");
    con.query('use hicheel1hha')
});

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public/main.html'))
    // let query = 'INSERT INTO Persons (FirstName, Age) VALUES ("unnamed", 21);'

    let query = 'SELECT * FROM Persons'
    
    con.query(query, (err, result)=>{
        if (err) throw err;
        console.log("done")
        res.send(result)
    })
})


const PORT = process.env.PORT || 8081
server.listen(PORT, err => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('listening ' + PORT)
})