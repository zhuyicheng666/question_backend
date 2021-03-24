import query from '../model/query'
const loadAllPaper = async function (req,res,next){

  let sql='SELECT paper.pid,paper.title,date_format(paper.date, "%Y-%m-%d") as date,teacher.name  from paper,teacher where paper.tid = ? and paper.tid =teacher.tid '
  
  let data=req.body.data,vals
  console.log(data)
  let arr=[data.tid]
  console.log(arr)
  vals= await query(sql,arr)

  
  console.log(vals)

  if(vals.length !== 0 ){
    res.send(
      JSON.stringify({
        code: 200,
        message: '查询成功',
        data:vals
        })
    )
  }else {
    res.send(
      JSON.stringify({
        code: 400,
        message: '查询失败',
        })
    )
  }
  


  
 


  
}
export default loadAllPaper