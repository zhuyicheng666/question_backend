var express = require('express');
var router = express.Router();
import addStudent from '../controller/addStudent'


router.post('/',addStudent)
module.exports = router;
