
// Importar los servicio
const { consultarDocumentos, TipoDocumentos, ReviewsDocumentos, DocumentosporCamas} = require('../services/mongodb.service');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const consultarAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        let resultado = await consultarDocumentos(process.env.COLLECTION_AIRBNB)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const TiposAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Tipos de Airbnb consultados exitosamente"
        let resultado = await TipoDocumentos(process.env.COLLECTION_AIRBNB)
        resultado = resultado.map((element) => {
            return element._id
        })
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los tipos de airbnb"
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const ReviewsAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnbs con más reviews consultados exitosamente"
        let resultado = await ReviewsDocumentos(process.env.COLLECTION_AIRBNB)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const CamasAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        // Limite de registros que pide el usuario para la consulta
        let limite = req.params.nro_beds
        respuesta.ok = true
        respuesta.message = "Airbnbs con más camas disponibles consultados exitosamente"
        // Se consultan los airbnb con más camas disponibles de la base de datos
        let resultado = await DocumentosporCamas(process.env.COLLECTION_AIRBNB, limite)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnbs"
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}


module.exports = {consultarAirbnb,TiposAirbnb,ReviewsAirbnb,CamasAirbnb}