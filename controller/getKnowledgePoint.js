import query from '../model/query'
const getChapter = async function (req,res,next){

  let sql="SELECT DISTINCT knowledgePoint from knowledge where chapter = ?"
 
  let data=req.body.data,vals

  let arr=[data.chapter]
 
  
  vals= await query(sql,arr)

  
 

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
export default getChapter