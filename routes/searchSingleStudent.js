var express = require('express');
var router = express.Router();
import searchSingleStudent from '../controller/searchSingleStudent'


router.post('/',searchSingleStudent)
module.exports = router;
