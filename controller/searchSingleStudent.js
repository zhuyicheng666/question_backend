import query from '../model/query'
const searchSingleStudent = async function (req,res,next){

  
  let searchSingleStudentSql = "select name from student where userName = ? "


  let data=req.body.data


  let vals

 
  let arr =[data.userName]
  vals = await query(searchSingleStudentSql,arr)

  if (vals.length!==0){
    res.send(
      JSON.stringify({
        code: 200,
        data:vals

        })
    )
  }







  }
  


  
 


  

export default searchSingleStudent