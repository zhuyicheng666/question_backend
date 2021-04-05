var express = require('express');
var router = express.Router();
import searchstudent from '../controller/searchstudent'


router.post('/',searchstudent)
module.exports = router;
