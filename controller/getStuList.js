import query from '../model/query'
const getStuList = async function (req,res,next){

  
  let searchStuListSql = "select name,record.sid from student,record where record.sid=student.sid and pid = ? and stuAnswer=? and qid=? "
 
  let data=req.body.data


  let vals

 
  let arr =[data.pid,data.stuAnswer,data.qid]
  vals = await query(searchStuListSql,arr)

  
         res.send(
        JSON.stringify({
          code: 200,
          message:"添加成功",
          data:vals
          })
      )
      }
    
   
   
  
  







  
  


  
 


  

export default getStuList