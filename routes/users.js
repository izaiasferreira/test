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
router.get('/', function (req, res, next) {
  var index = database.users.findIndex(u => u.cpf === req.query.cpf)
  res.status(200).json(database.users[index]);
});

router.get('/alll', function (req, res, next) {
  res.status(200).json(database.users);
});


router.post('/', function (req, res, next) {
  var user = req.body
  var databaseUsers = database.users
  databaseUsers.push(user)
  database.users = databaseUsers
  res.status(200).end();
});

router.put('/', function (req, res, next) {
  var user = req.body
  var index = database.users.findIndex(u => u.id === user.id)
  database.users[index] = user
  res.status(200).end();
});

router.delete('/', function (req, res, next) {
  var id = req.query.id
  var filter = database.users.filter(u => u.id != id)
  database.users = filter
  res.status(200).end();
});
module.exports = router;
