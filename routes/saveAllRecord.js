var express = require('express');
var router = express.Router();
import saveAllRecord from '../controller/saveAllRecord'


router.post('/',saveAllRecord)
module.exports = router;
