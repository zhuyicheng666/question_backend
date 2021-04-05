import query from '../model/query'
const loadAllStuResult = async function (req,res,next){

  let loadAllStuResultSql='select pid,student.sid,score,date_format(date, "%Y-%m-%d") as date,name from student2paper,student where student.sid=student2paper.sid and pid=?'
 
  
  let data=req.body.data,vals



  let arr=[data.pid]

  vals= await query(loadAllStuResultSql,arr)
 



 



 

  
    res.send(
      JSON.stringify({
        code: 200,
        message: '查询成功',
        data:vals
        })
    )
  }
  


  
 


  

export default loadAllStuResult