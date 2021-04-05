import query from '../model/query'
const addChapter = async function (req,res,next){

  
  let searchSingleStudentSql = "select kid  from knowledge where chapter = ? "

  let addStudentSql = "insert into knowledge (chapter) values (?) "
  
  let data=req.body.data


  let vals

 
  let arr =[data.chapter]


  vals = await query(searchSingleStudentSql,arr)

  if (vals.length!==0)
   
   {
      res.send(
        JSON.stringify({
          code: 201,
          message:"已存在",
          
          })
      )
    }

  else{
    vals= await query(addStudentSql,arr)
   
    vals = await query(searchSingleStudentSql,arr)
    if(vals.length!==0){
       res.send(
      JSON.stringify({
        code: 200,
        message:"添加成功",
        data:vals
        })
    )
    }
  }
   
  
  







  }
  


  
 


  

export default addChapter