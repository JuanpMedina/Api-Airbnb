
const { MongoClient } = require("mongodb");

const uri = process.env.URI_MONGODB;

const client = new MongoClient(uri);

const conectarDB = async () => {
  await client.connect();
  let DB = client.db(process.env.DB_MONGODB)
  return DB;
}

const consultarDocumentos = async (nombreColeccion, filtro) => {
  let db = await conectarDB()
  let coleccion = db.collection(nombreColeccion)
  filtro = filtro ? filtro : {}
  return coleccion.find(filtro).limit(parseInt(process.env.DEFAULT_LIMIT_PROPERTIES)).toArray()
}

module.exports = { consultarDocumentos }