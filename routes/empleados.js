const { Router } = require('express')
const router = Router() //Obtener la función Router

const {getEmpleado,postEmpleado,deleteEmpleado,putEmpleado, patchEmpleado} = require('../controllers/empleados')


router.get('/',getEmpleado) 
router.post('/',postEmpleado) 
router.delete('/',deleteEmpleado) 
router.put('/',putEmpleado) 
router.patch('/',patchEmpleado) 

module.exports = router