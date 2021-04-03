var express = require('express');
var router = express.Router();
import searchAnsweredPaperRecord from '../controller/searchAnsweredPaperRecord'


router.post('/',searchAnsweredPaperRecord)
module.exports = router;
