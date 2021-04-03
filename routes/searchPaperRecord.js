var express = require('express');
var router = express.Router();
import searchPaperRecord from '../controller/searchPaperRecord'


router.post('/',searchPaperRecord)
module.exports = router;
