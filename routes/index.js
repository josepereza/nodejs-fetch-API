var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/ver', function(req, res, next) {
  console.log('hola');

 res.render('lista1')
});

router.post('/datos', function(request, response){
  
  console.log(request.body.user.name);
  console.log(request.body.user.email);
  response.render('listapost',{title: request.body.user});
});

module.exports = router;
