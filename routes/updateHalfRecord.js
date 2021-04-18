var express = require('express');
var router = express.Router();
import updateHalfRecord from '../controller/updateHalfRecord'


router.post('/',updateHalfRecord)
module.exports = router;
