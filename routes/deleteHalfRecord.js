var express = require('express');
var router = express.Router();
import deleteHalfRecord from '../controller/deleteHalfRecord'


router.post('/',deleteHalfRecord)
module.exports = router;
