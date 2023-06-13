import mysql from 'mysql2'
import {credentials} from "./credentials.js"

const db = mysql.createConnection(credentials)

db.query(
    'SELECT * FROM movies',
    function(error, results){
        console.log(error)
        for(let i = 0; i < results.length; i++){
            console.log(results[i].title)
        }
        db.destroy()
    }
)