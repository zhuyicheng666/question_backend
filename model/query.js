import pool from '../config/pool'
const query = function(sql, sqlArr,commit) {
    return new Promise(
        (resolve, reject) => {
            pool.getConnection(function(err, conn) {
                if (err) {
                    console.log("连接数据库失败")
                    reject(err)
                }
                conn.query(sql, sqlArr,(qerr,vals)=>{
                    if (qerr){
                        reject(qerr)
                    }else{
                        resolve(vals)
                    } 
                   conn.release()
                })
                
                
            })
        }

    )
}
export default query