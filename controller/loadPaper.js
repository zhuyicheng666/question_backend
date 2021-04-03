import query from '../model/query'
const loadPaper = async function (req,res,next){

  let paperSql='select pid,title,time from paper where pid = ?'
  let question2paperSql='select qid from question2paper where pid = ?'
  let questionChoiceSql='select * from question where qid = ? and type = "choice"'
  let questionJudgementSql='select * from question where qid = ? and type = "judgement"'


  let data=req.body.data,vals,result,choiceData=[],judgementData=[]



  let arr=[data.pid]

  vals= await query(paperSql,arr)
  result={
    pid:vals[0].pid,
    title:vals[0].title,
    time:vals[0].time
  }

  vals= await query(question2paperSql,arr)
  // console.log(1111111)
   //console.log(vals)
  // console.log(vals.length)
  for(let item of vals){
    arr = [item.qid]
  
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
  


  
 


  

export default loadPaper