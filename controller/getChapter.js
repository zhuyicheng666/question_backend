import query from '../model/query'
const getChapter = async function (req,res,next){

  let sql="SELECT DISTINCT chapter from knowledge"
  let vals
 

 
  
  vals= await query(sql)

  
 

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