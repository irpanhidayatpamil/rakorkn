import mysql from 'mysql';

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'rakor',
//     password: 'Rakor#2021',
//     database: 'rakor_run'
// })
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'popcorn66',
    database: 'rakor_run'
})
db.connect();
export default db;