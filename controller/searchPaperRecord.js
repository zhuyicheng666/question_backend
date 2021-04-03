import query from '../model/query'
const searchPaperRecord = async function (req,res,next){

  
 
  let searchPaperSql="select student2paper.pid,date_format(student2paper.date, '%Y-%m-%d') as date,teacher.name,paper.title,student2paper.score from paper,teacher,student2paper where student2paper.pid=paper.pid and paper.tid=teacher.tid and student2paper.sid=? and student2paper.finished = 1"
  let data=req.body.data,vals,result



  let arr=[data.sid]

  vals= await query(searchPaperSql,arr)


  console.log(vals)

    res.send(
      JSON.stringify({
        code: 200,
        message: '查询成功',
        data:vals
        })
    )
  }
  


  
 


  

export default searchPaperRecord