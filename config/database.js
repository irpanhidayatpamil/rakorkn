import mysql from 'mysql';

// const db = mysql.createConnection({
//     host: '127.0.0.1',
     user: 'rakor',
//     password: 'Rakor#2021',
//     database: 'rakor_run'
// })
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Logika@88888888',
    database: 'rakor_run'
})
db.connect();
export default db;
