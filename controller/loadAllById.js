import query from '../model/query'
const loadAll = async function (req,res,next){

  
  
  let data=req.body.data,vals

  let arr = data[0]
  for (let i =1;i<data.length;i++){
    arr=arr + ','+data[i]
  }
  arr= '('+arr+')'

  let sql="SELECT * from question,knowledge where qid in" +arr+" and knowledge.kid=question.kid"

  vals= await query(sql)

  
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