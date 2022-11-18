const {Schema, model} = require('mongoose')

const EmpleadoSchema = Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    documento: {
        type: Number
    },
    cargo: {
        type: String
    }
})
module.exports = model('Empleado', EmpleadoSchema)