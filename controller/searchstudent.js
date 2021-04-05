import query from '../model/query'
const searchstudent = async function (req,res,next){

  
  let selectStudentSql = "select name,student.sid from student,student2teacher where student.sid=student2teacher.sid and tid = ? "


  let data=req.body.data


  let vals

 
  let arr =[data.tid]
  vals = await query(selectStudentSql,arr)

  if (vals.length!==0){
    res.send(
      JSON.stringify({
        code: 200,
        data:vals

        })
    )
  }







  }
  


  
 


  

export default searchstudent