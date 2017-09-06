var express = require("express"),
  app = express(),
  morgan = require("morgan"),
  path = require('path'),
  mongoose = require("mongoose"),
  router = express.Router();

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/pacientedb', {
  useMongoClient: true,
  promiseLibrary: global.Promise
});

mongoose.model('pacientes', { nome: String });

// app.use(morgan('dev'))
app.use(morgan('common'))

app.use('/app', express.static(path.join(__dirname, '/app')));

router.get('/', function(req, res) {
  res.json({ message: 'Endpoint default' });
});

router.get('/pacientes', function(req, res) {

  mongoose.model('pacientes').find(function(err, result) {
    res.json(result);
  })

  // var pacientes = [{
  // nome: "Yasmin Laís Lavínia Araújo",
  // sexo: "F",
  // cpf: "240.629.758-66",
  // rg: "41.622.727-2",
  // dataNascimento: "04/04/1997",
  // email: "yasminlalav@soulcomunicacao.com.br",
  // endereço:{
  // cep: "02672-080", 
  // endereço: "Rua Santo Antônio do Pirapetinga",
  // numero: 891,
  // bairro: "Jardim Santa Cruz (Zona Norte)",
  // cidade: "São Paulo",
  // estado: "SP"
  // },
  // telefones:{
  // Telefone: "(11) 2838-2310",
  // Celular: "(11) 98938-7674"
  // }
  // }];

  // res.json(pacientes);

});

app.use('/api', router);

// Start Server
app.listen(port, function() {
  console.log("Servidor em execução na porta:" + port);
});
