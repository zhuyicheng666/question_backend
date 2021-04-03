import query from '../model/query'


function shuffle(Array) {

  for(let  i = Array.length-1; i > 0; i-- ) {
      let  j = Math.floor(Math.random()*(Array.length+1)) 
      let temp = Array[i];
      Array[i] = Array[j];
      Array[j] = temp;
  }
  return Array;
}
const random = async function (req,res,next){

  let searchAllData= "select * from(question left join process on process.qid=question.qid) ,knowledge where knowledge.kid = question.kid"


  let data=req.body.data,vals

  let difficulty,chapter,type,num=data.num
  let arr=[]

  

  if(data.difficulty!==0){
    difficulty=data.difficulty
    searchAllData=searchAllData+' and question.difficulty=?'
    arr.push(difficulty)
  }

  if(data.chapter!==''){
    chapter=data.chapter
    searchAllData=searchAllData+' and knowledge.chapter=? '
    arr.push(chapter)
  }
  if(data.type!==''){
    type=data.type
    searchAllData=searchAllData+' and question.type=? '
    arr.push(type)
  }
  
  console.log(searchAllData)





  vals= await query(searchAllData,arr)
 
  
  if (vals.length>=num){

    let result = shuffle(vals).slice(0,num);
    res.send(
      JSON.stringify({
        code: 200,
        message: '查询成功',
        data:result
        })
    )
  }else if(vals.length === 0) {
    res.send(
      JSON.stringify({
        code: 202,
        message: '筛选结果为0,请重置筛选条件',
        })
    )
  }
  else{
    res.send(
      JSON.stringify({
        code: 201,
        message: '查询结果不足预定数量,已返回全部结果',
        data:vals
        })
    )
  }



  }
  


export default random