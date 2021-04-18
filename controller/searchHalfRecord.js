import query from '../model/query'
const searchHalfRecord = async function (req,res,next){

  
  
  let searchRecordSql="select * from student2paper where sid = ? and pid = ?"
      

  let data=req.body.data


  let sid=data.sid,pid=data.pid,val,arr

  

  
  arr = [sid,pid]
  console.log(arr)
  val=await query(searchRecordSql,arr)

  
  if(val.length!==0){
    if (val[0].finished ===0){
      res.send(
        JSON.stringify({
          code: 201,
          data:{
            lasttime:val[0].lasttime,
            totaltime:val[0].totaltime
          }
          })
      )
    }
  }else{
    
    res.send(
      JSON.stringify({
        code: 200,
        message: '插入成功',
        })
    )
  }
 
  }
  


  
 


  

export default searchHalfRecord