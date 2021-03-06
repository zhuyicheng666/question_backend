import query from '../model/query'
const searchAnsweredPaperRecord = async function (req,res,next){
  let paperSql='select pid,title,time from paper where pid = ?'
  let question2paperSql='select qid from question2paper where pid = ?'
  let questionChoiceSql='select * from question,record where question.qid = ? and type = "choice" and record.qid=question.qid and sid = ? and pid =?'
  let questionJudgementSql='select * from question,record where question.qid = ? and type = "judgement" and record.qid=question.qid and sid = ? and pid = ?'


  let data=req.body.data,vals,result={},choiceData=[],judgementData=[]
  let sid = data.sid
  let pid =data.pid

  let arr=[data.pid]

  vals= await query(paperSql,arr)
  result={
  
    title:vals[0].title,
   pid:pid
  }
  vals= await query(question2paperSql,arr)
  // console.log(1111111)
   //console.log(vals)
  // console.log(vals.length)
  for(let item of vals){
    arr = [item.qid,sid,pid]
  
     vals = await query(questionChoiceSql,arr)
    
     if(vals.length!==0){
     
      choiceData.push(vals[0])
      console.log(1111)
     }
    vals = await query(questionJudgementSql,arr)
    
     if(vals.length!==0){

        judgementData.push(vals[0])
      console.log(3333)
     }
   
  }
 

  // console.log(vals)
  result.choiceData=choiceData
  result.judgementData=judgementData

  
    res.send(
      JSON.stringify({
        code: 200,
        message: '查询成功',
        data:result
        })
    )
  }
  


  
 


  

export default searchAnsweredPaperRecord