var express = require('express');
var router = express.Router();
import studentInit from '../controller/studentInit'


router.post('/',studentInit)
module.exports = router;
