var express = require('express');
var router = express.Router();
import login from '../controller/login'
// var mysql = require('mysql');
// const bodyParser = require('body-parser');

// const jsonParser = bodyParser.json();

// var pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '990112',
//   database:'question_bank'
// })

// var sql = 'SELECT * from user where username = ?';

// router.post('/', jsonParser, function (req, res, next) {
//    //从连接池获取连接
//    pool.getConnection(function (err, conn) {
//     if (err) {
//       res.send(JSON.stringify({
//         code: '0x000000000',
//         status: 0,
//         remark: '服务器异常',
//         message: null,
//         data: null
//       }));
//     } else {
      
//       const username = req.body.data.name
//       const password = req.body.data.password
//       conn.query(sql,[username], function (qerr, vals, fields) {
//         if (qerr) {
//           res.send(JSON.stringify({
//             code: '0x000000000',
//             status: 0,
//             remark: '获取用户列表',
//             message: '请求失败',
//             data: null
//           }));
//         }
//         //释放连接
//         conn.release();
//         if (password===vals[0].password){
//           res.send(JSON.stringify({
//           code: '0x000000000',
//           status: 1,
//           remark: '获取用户列表',
//           message: '请求成功',
//           data: vals
//            }));
//         }else{
//           res.send(JSON.stringify({
//             code: '0x000000000',
//             status: 0,
//             remark: '获取用户列表',
//             message: '请求失败',
//             data: null
//              }));
//         }
        
//       });
//     }
//   });
// });

router.post('/',login)
module.exports = router;
