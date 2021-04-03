var express = require('express');
var router = express.Router();
import searchRightAnswerRecord from '../controller/searchRightAnswerRecord'


router.post('/',searchRightAnswerRecord)
module.exports = router;
