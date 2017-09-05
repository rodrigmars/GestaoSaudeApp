# GestaoSaudeApp

CRUD Server-Side para cadastro de pacientes.

## Visão geral
GestaoSaudeApp é um desk Server-Side e Client-Side para operações de consulta e cadastro.

## Pré-Requisitos
Instalar depedências:
```sh
bower install
```

## Observações:
* Permite uma execução local lançando a cli:
```sh
node server
```
* Necessário alterar o endereço de storage MongoDB no arquivo raiz `GestaoSaudeApp/server.js`
* Não possui módulo de autenticação
* Para uma integração com qualquer api server, basta alterar a url localizada no aquivo `GestaoSaudeApp/app/js/config.js`

## Estrutura:
```
GestaoSaudeApp/
|-- app
|   |-- index.html
|   |-- js
|   |   |-- app.js
|   |   |-- controllers.js
|   |   `-- services.js
|   |-- partials
|   |   `-- home.html
|   `-- services
```

## Bibliotecas:

### Client-Side
* BootStrap 4
* AngularJs vs 1.6.6

### Server-Side
* JS (NodeJS)
* Express.js(Server-Side)

### Database
* MongoDb

## Autor
* Rodrigo Silva [rodrigmars](https://github.com/rodrigmars)
