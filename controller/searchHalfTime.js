import query from '../model/query'
const searchHalfTime = async function (req,res,next){

  
  let sql="select time from paper where pid = ?"
  let data=req.body.data,vals,result={}



  let arr=[data.pid]

  vals= await query(sql,arr)
  result.time=vals[0].time

  let spenttimeSql="select spenttime from student2paper where pid = ? and sid = ?"
  
  arr= [data.pid,data.sid]

  vals =await query(spenttimeSql,arr)
  
 result.spenttime =vals[0].spenttime
  let deleteSql = "DELETE FROM student2paper where pid = ? and sid = ?"

 arr= [data.pid,data.sid]

  vals =await query(deleteSql,arr)

 
    res.send(
      JSON.stringify({
        code: 200,
        message: '查询成功',
        data:result
        })
    )
  }
  


  
 


  

export default searchHalfTime