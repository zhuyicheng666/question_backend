var express = require('express');
var router = express.Router();
import commit from '../controller/commit'


router.post('/',commit)
module.exports = router;
