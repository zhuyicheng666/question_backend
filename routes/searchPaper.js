var express = require('express');
var router = express.Router();
import searchPaper from '../controller/searchPaper'


router.post('/',searchPaper)
module.exports = router;
