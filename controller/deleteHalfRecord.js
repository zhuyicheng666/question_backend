import query from '../model/query'
const deleteHalfRecord = async function (req,res,next){

  
  let deleteStudentSql = "delete from record where sid=? and pid=? "


  let data=req.body.data


  let vals

 
  let arr =[data.sid,data.pid]
  vals = await query(deleteStudentSql,arr)

  console.log(vals)


  
    res.send(
      JSON.stringify({
        code: 200,
        message:"删除成功"

        })
    )
  







  }
  


  
 


  

export default deleteHalfRecord