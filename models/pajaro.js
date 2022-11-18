const {Schema, model} = require('mongoose')

const PajaroSchema = Schema({
    nombre: {
        type: String
    },
    contrasena: {
        type: String
    }
})
module.exports = model('Pajaro', PajaroSchema)