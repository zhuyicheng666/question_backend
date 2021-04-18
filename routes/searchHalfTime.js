var express = require('express');
var router = express.Router();
import searchHalfTime from '../controller/searchHalfTime'


router.post('/',searchHalfTime)
module.exports = router;
