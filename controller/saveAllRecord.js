import query from '../model/query'
const saveAllRecord = async function (req,res,next){

  
  
  let insertRecordSql="insert into record (qid,result,stuAnswer,sid,pid)values(?,?,?,?,?)"


  let data=req.body.data


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

  let insertStudent2PaperSql= "insert into student2paper (sid,pid,score,date,finished) values(?,?,?,?,1)"
  arr = [sid,pid,score,new Date()]
  console.log(arr)
  await query(insertStudent2PaperSql,arr)



 
    res.send(
      JSON.stringify({
        code: 200,
        message: '插入成功',
        })
    )
  }
  


  
 


  

export default saveAllRecord