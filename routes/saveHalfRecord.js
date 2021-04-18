var express = require('express');
var router = express.Router();
import saveHalfRecord from '../controller/saveHalfRecord'


router.post('/',saveHalfRecord)
module.exports = router;
