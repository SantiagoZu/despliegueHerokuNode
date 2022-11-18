const mongoose = require('mongoose')

const dbConnection = async() => {
    try {
        mongoose.connect(process.env.MONGODB_CNN,{})
        console.log('Conexion correcta')
    }
    catch (e){
        console.log('Error connecting to Mongo')
    }
}
module.exports = { dbConnection }