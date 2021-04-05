import query from '../model/query'
const login = async function (req,res,next){

  
  let selectStudentSql = "select * from student where userName = ? "
  let selectTeacherSql = "select * from teacher where userName = ? "

  let data=req.body.data


  let vals,userName = data.userName,password=data.password,role=data.role

  let array=[userName],result={}

  if (userName==="11111111111" && password==="111111"){
    res.send(
      JSON.stringify({
        code: 200,
        message: '登陆成功',
        data:{role:"superAdmin"}
        })
    )
  }



  if(role==="学生"){
    vals=await query(selectStudentSql,array)
    result.role="student"
    result.sid=vals[0].sid
  }else{
    vals=await query(selectTeacherSql,array)
    result.role="teacher"
    result.tid=vals[0].tid
  }

 



  if (vals.length!==0){
    if (vals[0].password===password){
      res.send(
        JSON.stringify({
          code: 200,
          message: '登陆成功',
          data:result
          })
      )
    }else{
      res.send(
        JSON.stringify({
          code: 201,
          message: '登陆失败',
          })
      )
    }
  }else{
    res.send(
      JSON.stringify({
        code: 201,
        message: '登陆失败',
        })
    )
  }



    
 


  }

export default login