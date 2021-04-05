import query from '../model/query'
const deletestudent = async function (req,res,next){

  
  let deleteStudentSql = "delete from student2teacher where sid=? and tid=? "


  let data=req.body.data


  let vals

 
  let arr =[data.sid,data.tid]
  vals = await query(deleteStudentSql,arr)

  console.log(vals)


  
    res.send(
      JSON.stringify({
        code: 200,
        message:"删除成功"

        })
    )
  







  }
  


  
 


  

export default deletestudent