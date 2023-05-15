var express = require('express');
var router = express.Router();
var database = {
  users: [
    {
      name: 'João',
      telefone: '(11) 99999-9999',
      id: 1,
      cpf: '12345678900',
    },
    {
      name: 'Maria',
      telefone: '(11) 88888-8888',
      id: 2,
      cpf: '08070707090',
    },
    {
      name: 'Izaias',
      telefone: '(11) 77777-7777',
      id: 3,
      cpf: '54478474454654',
    },
    {
      name: 'Marcelo',
      telefone: '(11) 66666-6666',
      id: 4,
      cpf: '9879698686868',
    },
  ]
}
/* GET users listing. */
router.get('/allClients', function (req, res, next) {
  res.render(200).json(database);
});

router.get('/', function (req, res, next) {
  var index = database.users.findIndex(u => u.cpf === req.query.cpf)
  res.status(200).json(database.users[index]);
});

router.post('/', function (req, res, next) {
  var user = req.body
  database.users.push(user)
  res.status(200);
});

router.put('/', function (req, res, next) {
  var user = req.body
  var index = database.users.findIndex(u => u.id === user.id)
  database.users[index] = user
  res.status(200);
});

router.delete('/', function (req, res, next) {
  var id = req.body
  var filter = database.users.filter(u => u.id !== id)
  database.users = filter
  console.log(database.users);
  res.status(200);
});
module.exports = router;
