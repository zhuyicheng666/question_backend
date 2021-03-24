var express = require('express');
var router = express.Router();
import loadPaper from '../controller/loadPaper'


router.post('/',loadPaper)
module.exports = router;
