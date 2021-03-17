import query from '../model/query'
const commit = async function (req,res,next){


  let insertKnowledgeSql = 'insert into knowledge (chapter,knowledgePoint) values (?,?)'
  let insertQuestionSql = 'insert into question (type,question,answer,difficulty,kid,optionA,optionB,optionC,optionD) values (?,?,?,?,?,?,?,?,?)';
  let insertJudgementQuestionSql = 'insert into question (type,question,answer,difficulty,kid,optionA,optionB) values (?,?,?,?,?,?,?)';
  let insertProcessSql = 'insert into process (qid,text) values(?,?)'
  let data=req.body.data

  let kid,qid,vals
  let knowledgeArr, questionArr,processArr
  

  // let knowledgeCb=function(qerr,vals,fields){
  //   if(qerr){
  //     console.log(qerr)
  //     reject()
  //   }else{
  //     kid=vals.insertId
  //     questionArr=[data.type,data.question,data.answer,data.difficulty,kid]
    
  //     resolve()
  //   }
  // }


  // let questionCb=function(qerr,vals,fields){
  //   if(qerr){
  //     console.log(qerr)
  //     reject()
  //   }else{
  //     qid=vals.insertId
  //     resolve()
  //     // questionArr=[data.type,data.question,data.answer,data.difficulty,kid]
  //   }
  // }

  knowledgeArr = [data.chapter,data.knowledgePoint]
  vals =await query(insertKnowledgeSql,knowledgeArr)
  // console.log("第一次")
  kid=vals.insertId
  questionArr=[data.type,data.question,data.answer,data.difficulty,kid]
 

  for ( let i =0;i<data.option.length;i++){
    questionArr.push(data.option[i].text)
  }

  if(data.type === 'choice'){
      vals = await query(insertQuestionSql,questionArr)
  }else{
    vals = await query(insertJudgementQuestionSql,questionArr)
  }



  qid = vals.insertId

  if(data.process!==''){
    processArr=[qid,data.process]
    vals= await query(insertProcessSql,processArr)
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
  


   
  
  
  
 


  
  // let sqlArr = [req.body.data.name]
  // let cb=function(qerr,vals,fields){
  //   if(qerr){
  //     console.log("连接出错")
  //   }else{
  //     let password = req.body.data.password
  //     if (password===vals[0].password){
  //       res.send(JSON.stringify({
  //       code: '0x000000000',
  //       remark: '获取用户列表',
  //       message: '请求成功',
  //       data: vals
  //        }));
  //     }else{
  //       res.send(JSON.stringify({
  //         code: '0x000000000',
  //         status: 0,
  //         remark: '获取用户列表',
  //         message: '请求失败',
  //         data: null
  //          }));
  //     }
  //   }
  // }
  // if (req.body.data.role==="学生"){
  //   query(sql,sqlArr,cb)
  // }else{
  //   query(sql2,sqlArr,cb)
  // }
  
}
export default commit