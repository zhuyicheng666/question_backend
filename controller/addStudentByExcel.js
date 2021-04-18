import query from '../model/query'
const addStudent = async function (req,res,next){

  
  let searchSingleStudentSql = "select sid from student where userName = ? "
  let checkStudentSql = "select stid from  student2teacher where sid = ? and tid= ? "
  let addStudentSql = "insert into student2teacher (sid,tid) values (?,?) "
  let confirmStudentSql = "select  name,student.sid from student,student2teacher where student.sid=student2teacher.sid and  student2teacher.sid = ?  and student2teacher.tid=? "

  let createStudentSql="insert into student (userName,role,name) values (?,?,?)"





  let data=req.body.data,result=[]

  let vals
  let sid 
 for (let i=0;i<data.stu.length;i++){

  let arr =[data.stu[i].userName]
  vals = await query(searchSingleStudentSql,arr)
  if(vals.length===0){
    arr=[data.stu[i].userName,data.stu[i].role,data.stu[i].name]
    vals= await query(createStudentSql,arr)
  }


  vals = await query(searchSingleStudentSql,arr)
  if (vals.length!==0){
    arr=[vals[0].sid,data.tid]
     sid = vals[0].sid
    
    vals= await query(checkStudentSql,arr)
    if(vals.length!==0){
      res.send(
        JSON.stringify({
          code: 201,
          message:"已存在",
          
          })
      )
    }else{

      vals= await query(addStudentSql,arr)
      arr=[sid,data.tid]
      vals = await query(confirmStudentSql,arr)
      if(vals.length!==0){
        result.push(vals)
      }
    }

  }





 }
 
 res.send(
  JSON.stringify({
    code: 200,
    message:"添加成功",
    data:result
    })
)







  }
  


  
 


  

export default addStudent