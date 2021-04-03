import query from '../model/query'
const saveSingleRecord = async function (req,res,next){

  
  
  let insertRecordSql="insert into record (qid,result,stuAnswer,sid)values(?,?,?,?)"


  let data=req.body.data


  let sid=data.sid,qid=data.record.qid=data.record.qid,stuAnswer=data.record.stuAnswer,result,arr

  if(data.record.stuAnswer===data.record.answer){
    result=1
  }else{
    result=0
   
  }

  arr=[qid,result,stuAnswer,sid]
  await query(insertRecordSql,arr)







 
    res.send(
      JSON.stringify({
        code: 200,
        message: '插入成功',
        })
    )
  }
  


  
 


  

export default saveSingleRecord