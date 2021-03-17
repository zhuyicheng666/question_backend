var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '990112',
  database:'question_bank'
})

var sql = 'insert into user ( userName, password, role) values(?,?,?)';
var selectSql = 'SELECT * from user where username = ?';
router.post('/', jsonParser, function (req, res, next) {
   //从连接池获取连接
   pool.getConnection(function (err, conn) {
    if (err) {
      res.send(JSON.stringify({
        code: '0x000000000',
        status: 0,
        remark: '服务器异常',
        message: null,
        data: null
      }));
    } else {
      const username = req.body.data.name
      const password = req.body.data.password
      const role = req.body.data.role
  
      let promise = new Promise(function(resolve,reject){
        conn.query(selectSql,[username],function(qerr,vals,fields){
          if (qerr) {
            res.send(JSON.stringify({
              code: '0x000000000',
              status: 0,
              remark: '获取用户列表',
              message: '请求失败',
              data: null
            }));
          }
          if(vals.length!==0){
           
            reject()
          }else{
            
            resolve()
          }
        })
      })
      
      promise.then(function(){
        
        conn.query(sql,[username,password,role], function (qerr, vals, fields) {
          if (qerr) {
            res.send(JSON.stringify({
              code: '0x000000000',
              status: 0,
              remark: '注册用户',
              message: '注册失败',
              data: null
            }));
          }
          //释放连接
          conn.release();
         
            res.send(JSON.stringify({
              code: '0x000000000',
              status: 1,
              remark: '注册用户',
              message: '注册成功',
              data: null
               }));
  
          
        });
      }).catch(function(){
  
        res.send(JSON.stringify({
          code: '0x000000000',
          status: 0,
          remark: '注册用户',
          message: '用户已注册',
          data: null
        }))
      })
    }
  });
});

module.exports = router;
