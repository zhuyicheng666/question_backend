var express = require('express');
var router = express.Router();
import getChapter from '../controller/getChapter'


router.post('/',getChapter)
module.exports = router;
