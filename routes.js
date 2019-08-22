var express = require ('express');
var router = express.Router();
var empController = require ('./app/controllers/empController')


router.post('/emp/create',empController.createEmp)



module.exports = router;