const { response } = require('express')
const Pajaro = require('../models/pajaro')

const getPajaro = async (req, res = response) => {
    //const {nombre, raza, peso} = req.query
    const pajaros = await Pajaro.find()
    res.json({
        msg: 'get api pajaro',
        pajaros
    })
}

const postEmpleado = async (req, res = response) => {
    const {nombre, apellido, documento, cargo} = req.body
    const empleado = new Empleado({nombre, apellido, documento, cargo})

    await empleado.save()

    res.json({
        msg: 'post api Empleado',
        empleado
    })
}

const deleteEmpleado = async (req, res = response) => {
    const {nombre} = req.query

    const empleado = await Empleado.findOneAndDelete({nombre: nombre})

    res.json({
        msg: 'delete api empleado',
        empleado
    })
}

const putEmpleado = async (req, res = response) => {
    const {nombre, apellido, documento, cargo} = req.body
    const empleado = await Empleado.findOneAndUpdate({nombre: nombre}, {apellido: apellido, documento:documento, cargo:cargo})

    res.json({
        msg: 'update api empleado',
        empleado
    })
}

const patchEmpleado = async (req, res = response) => {
    const {nombre, apellido} = req.body
    const empleado = await Mascota.findOneAndUpdate({nombre: nombre}, {apellido: apellido})

    res.json({
        msg: 'update api empleado',
        empleado
    })
}


module.exports = {
    getPajaro,
    postEmpleado,
    deleteEmpleado,
    putEmpleado,
    patchEmpleado
}