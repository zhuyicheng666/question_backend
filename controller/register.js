import query from '../model/query'
const register = async function (req,res,next){

  
  let selectStudentSql = "select * from student where userName = ? "
  let insertSql="insert into student ( userName, password, role,name) values(?,?,?,?)"
  // let insertStudent2TeacherSql = "insert into student2teacher (sid,tid,ischecked) values (?,?,0)"



  let selectteacherSql = "select * from teacher where userName = ? "
  let insertteacherSql="insert into teacher ( userName, password, role,name) values(?,?,?,?)"







  let data=req.body.data


  let vals,userName = data.userName,password=data.password,role=data.role,name=data.name

  
  let arr =[userName]

  if(role==="student"){
    
  vals = await query(selectStudentSql,arr)
  }else{
    vals = await query(selectteacherSql,arr)
  }
  

  if (vals.length!==0){
    res.send(
      JSON.stringify({
        code: 201,
        message: '用户名重复',
        })
    )
  }else{
    arr= [userName,password,role,name]

    if (role==="student"){
       vals = await query(insertSql,arr)
       vals = await query(selectStudentSql,arr)
    }else{
      vals = await query(insertteacherSql,arr)
      vals = await query(selectteacherSql,arr)
    }
    
    if(vals.length!==0){
       res.send(
          JSON.stringify({
            code: 200,
            message: '注册成功',
            })
        )
    }
  
  }







  }
  


  
 


  

export default register