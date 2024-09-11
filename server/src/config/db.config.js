const { neon } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-http');


const sql = neon(process.env.POSTGRES_URL);
const db = drizzle(sql);


module.exports = db