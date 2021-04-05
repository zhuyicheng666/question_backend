import query from '../model/query'
const studentInit = async function (req,res,next){

  
  let totalQuestionSql = "select count(qid) as total from question  "
  let recordSql = "select count( DISTINCT qid) as mytotal from record where sid=?  "
  let wrongRecordSql = "select count( DISTINCT qid) as wrongtotal from record where result = 0 and sid=?  "
  let searchTeacherSql="select teacher.tid from teacher,student2teacher  where teacher.tid=student2teacher.tid and student2teacher.sid = ?"
  let searchPaperSql="select count(pid) as papertotal  from paper where tid = ? and pid not in (select pid from student2paper where sid = ? and finished = 1)"
  
  
  let data=req.body.data
  let sid = data.sid,tid


  let vals

 
  let arr =[sid],result={}
  vals = await query(totalQuestionSql)
  result.total=vals[0].total

  vals = await query(recordSql,arr)
  result.mytotal=vals[0].mytotal

  vals = await query(wrongRecordSql,arr)
  result.wrongtotal=vals[0].wrongtotal


  vals=await query(searchTeacherSql,arr)
  arr = [vals[0].tid,sid]

  vals=await query(searchPaperSql,arr)
  result.papertotal=vals[0].papertotal

  
       res.send(
      JSON.stringify({
        code: 200,
        message:"添加成功",
        data:result
        })
    )
    
   
  
  







  }
  


  
 


  

export default studentInit