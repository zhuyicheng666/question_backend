var express = require('express');
var router = express.Router();
import register from '../controller/register'


router.post('/',register)
module.exports = router;
