var express = require('express');
var router = express.Router();
import random from '../controller/random'


router.post('/',random)
module.exports = router;
