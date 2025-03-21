 const {Pool} = require("pg")

 const pool = new Pool({
  connectionString: process.env.POSTGRES_URI
 })


 async function queryDb(text,params) {

  const start = Date.now()
  try {
    const result = await pool.query(text, params)
    const duration = Date.now() - start;
    console.log(`Query executed in ${duration}ms`)
    return result
  } catch (error) {
    console.log('error', error);
  }
  
 }

 module.exports = {queryDb};