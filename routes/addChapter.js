var express = require('express');
var router = express.Router();
import addChapter from '../controller/addChapter'


router.post('/',addChapter)
module.exports = router;
