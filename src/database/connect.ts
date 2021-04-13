import mysql  from 'mysql2'

const mysqlDB = mysql.createConnection({
    host: "localhost",
    user: "deni",
    password: "denis1231234",
    database: "lol"
})



export { mysqlDB }