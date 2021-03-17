var express = require('express');
var router = express.Router();
import loadAll from '../controller/loadAll'


router.post('/',loadAll)
module.exports = router;
