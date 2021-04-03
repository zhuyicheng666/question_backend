var express = require('express');
var router = express.Router();
import saveSingleRecord from '../controller/saveSingleRecord'


router.post('/',saveSingleRecord)
module.exports = router;
