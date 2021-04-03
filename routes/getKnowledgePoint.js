var express = require('express');
var router = express.Router();
import getKnowledgePoint from '../controller/getKnowledgePoint'


router.post('/',getKnowledgePoint)
module.exports = router;
