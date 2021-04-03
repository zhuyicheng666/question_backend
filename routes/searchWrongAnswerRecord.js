var express = require('express');
var router = express.Router();
import searchWrongAnswerRecord from '../controller/searchWrongAnswerRecord'


router.post('/',searchWrongAnswerRecord)
module.exports = router;
