var express = require('express');
var router = express.Router();
import loadAllPaper from '../controller/loadAllPaper'


router.post('/',loadAllPaper)
module.exports = router;
