const { Router } = require('express')
const router = Router() //Obtener la función Router

const {getPajaro,postEmpleado,deleteEmpleado,putEmpleado, patchEmpleado} = require('../controllers/Pajaros')


router.get('/',getPajaro) 
router.post('/',postEmpleado) 
router.delete('/',deleteEmpleado) 
router.put('/',putEmpleado) 
router.patch('/',patchEmpleado) 

module.exports = router