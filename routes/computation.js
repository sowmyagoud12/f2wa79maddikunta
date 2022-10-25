var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var num1= Math.abs(Math.random() * 10) 
  var num2= Math.abs(Math.random() * 10) 
  var num3=Math.abs(Math.random() * 10) 
  
  var acos = Math.acos(num1)
  var sin = Math.sin(num2)
  var sinh = Math.sinh(num3)
  res.render('computation', { title: 'Sowmya Maddikunta Computing functions',
  num1:num1,
  num2:num2,
  num3:num3,
  acos:acos,
  sin: sin,
  sinh:sinh

});
});

module.exports = router;
