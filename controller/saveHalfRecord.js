import query from '../model/query'
const saveHalfRecord = async function (req,res,next){

  
  
  let insertRecordSql="insert into record (qid,result,stuAnswer,sid,pid)values(?,?,?,?,?)"
      

  let data=req.body.data
  console.log(data.paper.choiceData[0])

  let spenttime=data.spenttime
  let sid=data.sid,pid=data.paper.pid,qid,stuAnswer,result,arr
  let score=0

  data.paper.choiceData.forEach(async item=>{
    qid=item.qid
    stuAnswer=item.stuAnswer
    if(stuAnswer===item.answer){
      result=1
    }else{
      result=0
      score=score+1
    }
    arr=[qid,result,stuAnswer,sid,pid]
     await query(insertRecordSql,arr)

  })
  data.paper.judgementData.forEach( async item=>{
    qid=item.qid
    stuAnswer=item.stuAnswer
    if(stuAnswer===item.answer){
      result=1
    }else{
      result=0
      score=score+1
    }
    arr=[qid,result,stuAnswer,sid,pid]
     await query(insertRecordSql,arr)

  })

  let insertStudent2PaperSql= "insert into student2paper (sid,pid,score,date,finished,spenttime,lasttime,totaltime) values(?,?,?,?,0,?,?,?)"


 

  let lasttime = new Date().getTime();   
  let totaltime = data.totaltime



  arr = [sid,pid,score,new Date(),spenttime,lasttime,totaltime]
  console.log(arr)
  await query(insertStudent2PaperSql,arr)



 
    res.send(
      JSON.stringify({
        code: 200,
        message: '插入成功',
        })
    )
  }
  


  
 


  

export default saveHalfRecord