import dotenv from "dotenv";
import pgPromise from "pg-promise";
import { optionsPG } from "./optionsPG";

dotenv.config({ path: "variables.env" });

const portDB = Number(process.env.PORT);
const dataDB = String(process.env.DATABASE);
const hostDB = String(process.env.HOST);
const UserDB = String(process.env.USER_DB);
const PassDB = String(process.env.USER_PASSWORD);

const pgp = pgPromise(optionsPG);
const pool = pgp({
  user: UserDB,
  password: PassDB,
  database: dataDB,
  host: hostDB,
  port: portDB,
});

pool
  .connect()
  .then((miConn) => {
    console.log("Conectado a: " + dataDB);
    miConn.done();
  })
  .catch((miError) => {
    console.log(miError);
  });

export default pool;
