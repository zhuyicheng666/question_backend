var express = require('express');
var router = express.Router();
import searchHalfRecord from '../controller/searchHalfRecord'


router.post('/',searchHalfRecord)
module.exports = router;
