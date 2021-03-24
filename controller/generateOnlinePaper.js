import query from '../model/query'
const generateOnlinePaper = async function (req,res,next){



  let insertPaperSql = 'insert into paper(title,date,tid) values (?,?,?)'
  let insertQuestion2paperSql = 'insert into question2paper (pid,qid) values (?,?)'


  let data=req.body.data

  let pid,vals
  let paperArr,question2paperArr
  



  paperArr = [data.title,data.date,data.tid]
  vals =await query(insertPaperSql,paperArr)
  
  pid=vals.insertId
  for ( let i =0;i<data.choiceData.length;i++){
    question2paperArr=[pid,data.choiceData[i].qid]
    vals = await query(insertQuestion2paperSql,question2paperArr)
  }

  
  for ( let i =0;i<data.judgementData.length;i++){
    question2paperArr=[pid,data.judgementData[i].qid]
    vals = await query(insertQuestion2paperSql,question2paperArr)
  }


  


  query("commit")
  if(vals.warningCount === 0 ){
    res.send(
      JSON.stringify({
        code: 200,
        message: '插入成功',
        })
    )
  }else {
    res.send(
      JSON.stringify({
        code: 400,
        message: '插入失败',
        })
    )
  }
  


}
export default generateOnlinePaper