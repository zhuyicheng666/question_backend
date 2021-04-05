import query from '../model/query'
const searchteacher = async function (req,res,next){

  
  let selectTeacherSql = "select name,teacher.tid from teacher,student2teacher where teacher.tid=student2teacher.tid and sid = ? "


  let data=req.body.data


  let vals

 
  let arr =[data.sid]
  vals = await query(selectTeacherSql,arr)

  if (vals.length!==0){
    res.send(
      JSON.stringify({
        code: 200,
        data:vals

        })
    )
  }







  }
  


  
 


  

export default searchteacher