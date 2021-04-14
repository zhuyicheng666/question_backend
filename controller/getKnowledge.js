import query from '../model/query'
const getKnowledge = async function (req,res,next){

  let sql="SELECT DISTINCT knowledgePoint as value from knowledge where chapter=?"
  let vals,data=req.body.data
 

  let arr=[data.chapter]
  
  vals= await query(sql,arr)

  
 

 
    res.send(
      JSON.stringify({
        code: 200,
        message: '查询成功',
        data:vals
        })
    )

  


  
 


  
}
export default getKnowledge