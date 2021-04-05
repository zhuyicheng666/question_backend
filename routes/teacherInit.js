var express = require('express');
var router = express.Router();
import teacherInit from '../controller/teacherInit'


router.post('/',teacherInit)
module.exports = router;
