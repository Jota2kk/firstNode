import postgres from "postgres";
import 'dotenv/config'

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;


export const sql = postgres(URL, {ssl: 'require'});
//export const Sql = postgres(URL,{host: PGHOST,database: PGDATABASE,username: PGUSER,password: PGPASSWORD,port: 5432,ssl: 'require',connection: {options: `project=${ENDPOINT_ID}`,},});//
  

