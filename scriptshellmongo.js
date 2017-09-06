(function() {

  const HOST = "localhost:27017/pacientedb";

  var db = new Mongo().getDB("pacientedb");

  db.pacientes.drop()

  db.createCollection("pacientes", { autoIndexId: true })

  var pacientes_ = [{
    nome: "Yasmin Laís Lavínia Araújo",
    sexo: "F",
    cpf: "240.629.758-66",
    rg: "41.622.727-2",
    dataNascimento: "04/04/1997",
    email: "yasminlalav@soulcomunicacao.com.br",
    endereço: {
      cep: "02672-080",
      endereço: "Rua Santo Antônio do Pirapetinga",
      numero: 891,
      bairro: "Jardim Santa Cruz (Zona Norte)",
      cidade: "São Paulo",
      estado: "SP"
    },
    telefones: {
      Telefone: "(11) 2838-2310",
      Celular: "(11) 98938-7674"
    },
    diagnostico: ['Clínico', 'Etiológico', 'Sindrômico']
  }, ]

  db.pacientes.insert(pacientes_);

  db.pacientes.find().forEach(printjson);

}());
