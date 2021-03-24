var express = require('express');
var router = express.Router();
import loadAllById from '../controller/loadAllById'


router.post('/',loadAllById)
module.exports = router;
