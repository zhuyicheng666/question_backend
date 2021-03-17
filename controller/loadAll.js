import query from '../model/query'
const loadAll = async function (req,res,next){

  let sql="SELECT * from question,knowledge where type = ? and knowledge.kid=question.kid"
  
  let data=req.body.data,vals

  let arr=[data.type]
  
  vals= await query(sql,arr)

  
  // console.log(vals)

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
export default loadAll