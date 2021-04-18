var express = require('express');
var router = express.Router();
import addStudentByExcel from '../controller/addStudentByExcel'


router.post('/',addStudentByExcel)
module.exports = router;
