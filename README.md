# GestaoSaudeApp

CRUD Server-Side para cadastro de pacientes.

## Visão geral
GestaoSaudeApp é um desk Server-Side e Client-Side para operações de consulta e cadastro com uso de ODM (Object Data Mapping).

## Pré-Requisitos
* Depedências node:
```sh
$ node install
```
* Depedências bower:
```sh
$ bower install
```
* Script shell mongo para popular collection (pacientes):
```sh
$ mongo scriptshellmongo.js
```
* CLI para iniciar o server local:
```sh
$ nodemon server
```
* Retornando uma consulta simples, necessário antes iniciar o server.
```sh
http://localhost:3000/api/pacientes 
```

## Observações:
* Não possui módulo de autenticação
* Integra qualquer API RESTful

## Estrutura:
```
GestaoSaudeApp/
|-- app
|   |-- index.html
|   |-- js
|   |   |-- app.js
|   |   |-- config.js
|   |   |-- controllers.js
|   |   `-- services.js
|   |-- partials
|   |   `-- home.html
|   `-- services
|-- bower.json
|-- package.json
|-- scriptshellmongo.js
`-- server.js
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
