import query from '../model/query'
const searchPaperTime = async function (req,res,next){

  
  let sql="select time from paper where pid = ?"
  let data=req.body.data,vals



  let arr=[data.pid]

  vals= await query(sql,arr)

  
  

 
  
    res.send(
      JSON.stringify({
        code: 200,
        message: '查询成功',
        data:vals[0]
        })
    )
  }
  


  
 


  

export default searchPaperTime