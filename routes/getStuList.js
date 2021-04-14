var express = require('express');
var router = express.Router();
import getStuList from '../controller/getStuList'


router.post('/',getStuList)
module.exports = router;
