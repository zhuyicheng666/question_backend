var express = require('express');
var router = express.Router();
import searchPaperTime from '../controller/searchPaperTime'


router.post('/',searchPaperTime)
module.exports = router;
