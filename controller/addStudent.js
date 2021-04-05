import query from '../model/query'
const addStudent = async function (req,res,next){

  
  let searchSingleStudentSql = "select sid from student where userName = ? "
  let checkStudentSql = "select stid from  student2teacher where sid = ? and tid= ? "
  let addStudentSql = "insert into student2teacher (sid,tid) values (?,?) "
  let confirmStudentSql = "select  name,student.sid from student,student2teacher where student.sid=student2teacher.sid and  student2teacher.sid = ?  and student2teacher.tid=? "
  let data=req.body.data


  let vals
  let sid 
 
  let arr =[data.userName]
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
         res.send(
        JSON.stringify({
          code: 200,
          message:"添加成功",
          data:vals
          })
      )
      }
    }
   
   
  }
  







  }
  


  
 


  

export default addStudent