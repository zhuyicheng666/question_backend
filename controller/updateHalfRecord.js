import query from '../model/query'
const updateHalfRecord = async function (req,res,next){

  
  
  let insertRecordSql="UPDATE student2paper SET finished = 1 WHERE sid = ? and pid=?"
      

  let data=req.body.data


 





  let arr = [data.sid,data.pid]
 
  await query(insertRecordSql,arr)



 
    res.send(
      JSON.stringify({
        code: 200,
        message: '插入成功',
        })
    )
  }
  


  
 


  

export default updateHalfRecord