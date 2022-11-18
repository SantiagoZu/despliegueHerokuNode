const { Router } = require('express')
const router = Router() //Obtener la función Router

const {getMascota,postMascota,deleteMascota,putMascota} = require('../controllers/mascotas')


router.get('/',getMascota) 
router.post('/',postMascota) 
router.delete('/',deleteMascota) 
router.put('/',putMascota) 

module.exports = router