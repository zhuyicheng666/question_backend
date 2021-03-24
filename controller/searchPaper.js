import query from '../model/query'
const searchPaper = async function (req,res,next){

  
  let searchTeacherSql="select teacher.name,teacher.tid from teacher,student2teacher  where teacher.tid=student2teacher.tid and student2teacher.sid = ?"
  let searchPaperSql="select pid,title,date_format(paper.date, '%Y-%m-%d') as date,time from paper where tid = ? and pid not in (select pid from student2paper where sid = ? and finished = 1)"
  let data=req.body.data,vals,result



  let arr=[data.sid]

  vals= await query(searchTeacherSql,arr)


  console.log(vals)
  result=vals[0].name
  

  arr = [vals[0].tid,data.sid]
  vals= await query(searchPaperSql,arr)
  if(vals.length!==0){
    vals.forEach(item=>{
      item.name=result
    })
  }

  
    res.send(
      JSON.stringify({
        code: 200,
        message: '查询成功',
        data:vals
        })
    )
  }
  


  
 


  

export default searchPaper