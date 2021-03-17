import query from '../model/query'
const login = function (req,res,next){
  let sql = 'SELECT * from student where username = ?';
  let sql2 = 'SELECT * from teacher where username = ?'
  let sqlArr = [req.body.data.name]
  let cb=function(qerr,vals,fields){
    if(qerr){
      console.log("连接出错")
    }else{
      let password = req.body.data.password
      if (password===vals[0].password){
        res.send(JSON.stringify({
        code: '0x000000000',
        status: 1,
        remark: '获取用户列表',
        message: '请求成功',
        data: vals
         }));
      }else{
        res.send(JSON.stringify({
          code: '0x000000000',
          status: 0,
          remark: '获取用户列表',
          message: '请求失败',
          data: null
           }));
      }
    }
  }
  if (req.body.data.role==="学生"){
    query(sql,sqlArr,cb)
  }else{
    query(sql2,sqlArr,cb)
  }
  
}
export default login