var compression = require('compression'),
  express = require("express"),
  app = express(),
  morgan = require("morgan"),
  path = require('path'),
  mongoose = require("mongoose"),
  debug = require("debug"),
  router = express.Router();

var port = process.env.PORT || 3000;

// mongoose.connect('mongodb://localhost:27017/pacientedb', {
//   useMongoClient: true,
//   promiseLibrary: global.Promise
// });

mongoose.connect('mongodb://localhost:27017/pacientedb', { useMongoClient: true })

mongoose.model('pacientes', {
  nome: String,
  sexo: String,
  cpf: String,
  rg: String
});

app.use(compression());

// app.use(morgan('dev'))
app.use(morgan('common'))

app.use('/app', express.static(path.join(__dirname, '/app')));

app.use('/api', router);

router.get('/', function(req, res) {
  // res.json({ message: 'Endpoint default' });
  res.sendFile(__dirname + '/app/index.html');
});

router.get('/pacientes', function(req, res, next) {
  mongoose.model('pacientes').find(function(err, pacientes) {
    res.json(pacientes);
  })
});

router.get('/pacientes/:id', function(req, res) {
  mongoose.model('pacientes').find({ _id: req.params.id },
    function(err, pacientes) {
      res.json(pacientes);
    });
});

// Start Server
app.listen(port, function() {
  console.log("Serviço em execução na porta:" + port);
});
