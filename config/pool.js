import mysqlCfg from './mysqlCfg'
let mysql = require('mysql')
let pool = mysql.createPool(mysqlCfg)
export default pool

