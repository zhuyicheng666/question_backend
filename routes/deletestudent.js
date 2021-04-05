var express = require('express');
var router = express.Router();
import deletestudent from '../controller/deletestudent'


router.post('/',deletestudent)
module.exports = router;
