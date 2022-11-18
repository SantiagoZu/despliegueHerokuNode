const { response } = require('express')
const Mascota = require('../models/mascotas')

const getMascota = async (req, res = response) => {
    //const {nombre, raza, peso} = req.query
    const mascotas = await Mascota.find()
    res.json({
        msg: 'get api mascota',
        mascotas
    })
}

const postMascota = async (req, res = response) => {
    const {nombre, raza, peso} = req.body
    const mascota = new Mascota({nombre, raza, peso})

    await mascota.save()

    res.json({
        msg: 'post api mascota',
        mascota
    })
}

const deleteMascota = async (req, res = response) => {
    const {nombre} = req.query

    const mascota = await Mascota.findOneAndDelete({nombre: nombre})

    res.json({
        msg: 'delete api mascota',
        mascota
    })
}

const putMascota = async (req, res = response) => {
    const {nombre, raza, peso} = req.body
    const mascota = await Mascota.findOneAndUpdate({nombre: nombre}, {raza: raza, peso:peso})

    res.json({
        msg: 'update api mascota',
        mascota
    })
}


module.exports = {
    getMascota,
    postMascota,
    deleteMascota,
    putMascota
}