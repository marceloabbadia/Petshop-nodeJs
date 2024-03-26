# CRUD para API de Petshop usando Winston e SQL puro

<img width="1624" alt="Screenshot 2024-03-26 at 00 43 33" src="https://github.com/marceloabbadia/Petshop-nodeJs/assets/112344339/558a1269-1936-4628-9763-ed57e05d1492">


Este é um projeto do bootcamp que implementa um CRUD (Create, Read, Update, Delete) para uma API de Petshop. O projeto utiliza o banco de dados PostgreSQL hospedado no ElephantSQL e o logger Winston para registro de atividades.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes dependências instaladas em sua máquina:

- Node.js
- npm (Node Package Manager)
- PostgreSQL

## Instalação

1. Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Na pasta do projeto, instale as dependências do Node.js executando o seguinte comando:

```bash
npm install
```

## Configuração do Banco de Dados

Antes de iniciar o servidor, é necessário configurar o banco de dados PostgreSQL. Certifique-se de criar um banco de dados e configurar as credenciais de acesso no arquivo `config.js`.

## Uso

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

O servidor estará em execução na porta especificada no arquivo `config.js`.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:

```
.
├── config.js
├── controllers
│   ├── animais.controller.js
│   └── proprietarios.controller.js
├── db
│   ├── db.js
│   └── index.js
├── repositories
│   ├── animalRepository.js
│   ├── db.js
│   └── proprietarioRepository.js
├── routes
│   ├── animalRoutes.js
│   └── proprietarioRoutes.js
├── services
│   ├── animalService.js
│   └── proprietarioService.js
├── index.js
└── package.json
```

- `config.js`: Contém as configurações do banco de dados.
- `controllers/`: Contém os controladores para manipulação de dados relacionados a animais e proprietários.
- `db/db.js`: Configuração e inicialização da conexão com o banco de dados.
- `db/index.js`: Módulo de exportação do objeto de conexão com o banco de dados.
- `repositories/`: Contém os repositórios para acesso aos dados no banco de dados.
- `routes/`: Contém as definições de rotas da API relacionadas a animais e proprietários.
- `services/`: Contém os serviços responsáveis pela lógica de negócios relacionada a animais e proprietários.
- `index.js`: Arquivo principal que inicia o servidor.


