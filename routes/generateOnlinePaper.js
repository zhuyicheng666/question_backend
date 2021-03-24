var express = require('express');
var router = express.Router();
import generateOnlinePaper from '../controller/generateOnlinePaper'


router.post('/',generateOnlinePaper)
module.exports = router;
