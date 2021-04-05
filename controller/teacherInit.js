import query from '../model/query'
const teacherInit = async function (req,res,next){

  
  let totalQuestionSql = "select count(qid) as total from question  "
  let totalStudentSql = "select count(stid) as studenttotal from student2teacher where tid=?  "
  let totalPaperSql = "select count(pid) as mytotal from paper where tid=?   "
  let data=req.body.data
  let tid = data.tid


  let vals

 
  let arr =[tid],result={}
  vals = await query(totalQuestionSql)
  result.total=vals[0].total

  vals = await query(totalStudentSql,arr)
  result.studenttotal=vals[0].studenttotal

  vals = await query(totalPaperSql,arr)
  result.mytotal=vals[0].mytotal

 
       res.send(
      JSON.stringify({
        code: 200,
        message:"添加成功",
        data:result
        })
    )
    
   
  
  







  }
  


  
 


  

export default teacherInit