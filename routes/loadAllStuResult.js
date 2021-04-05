var express = require('express');
var router = express.Router();
import loadAllStuResult from '../controller/loadAllStuResult'


router.post('/',loadAllStuResult)
module.exports = router;
