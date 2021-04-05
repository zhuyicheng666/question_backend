var express = require('express');
var router = express.Router();
import searchteacher from '../controller/searchteacher'


router.post('/',searchteacher)
module.exports = router;
