var express = require('express');
var router = express.Router();
import getKnowledge from '../controller/getKnowledge'


router.post('/',getKnowledge)
module.exports = router;
