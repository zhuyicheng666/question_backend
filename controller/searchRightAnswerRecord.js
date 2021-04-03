import query from '../model/query'
const searchRightAnswerRecord = async function (req,res,next){

  let searchRightAnswerRecordSql= "select * from (question left join process on process.qid=question.qid), record,knowledge where knowledge.kid = question.kid and record.qid=question.qid and record.result=1 and record.sid=?"


  let data=req.body.data,vals



  let arr=[data.sid]

  vals= await query(searchRightAnswerRecordSql,arr)
 



  
    res.send(
      JSON.stringify({
        code: 200,
        message: '查询成功',
        data:vals
        })
    )
  }
  


  
 


  

export default searchRightAnswerRecord