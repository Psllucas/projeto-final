# projeto-final

Documentação Projeto Final
[GET] /todosusuarios
Exibe todos os usuários cadastrados. 
Resposta: HTTP 200 OK
[
           	{
                           	"_id": "64b5d75cec0656e11e69f978",
                           	"nome": "Magali",
                           	"email": "magali@gmail.com",
                           	"categoria": “Autoajuda”,
                           	"password": "$2b$10$RC5ey/RPxB4WcA5Z5FUxm.XiFcATKnUlQLKRotc90bNa1XvpEl/Tm",
                           	"__v": 0
           	}
]


[POST] /criar
Cadastrar novo usuário.
Requer body conforme-exemplo:

    {"nome": "Magali",
         "email": "magali10@gmail.com",
         "password":"123" }
Resposta HTTP 201 CREATED
{
	"message": "Usuário criado com sucesso",
	"savedUser": {
		"nome": "Magali",
		"email": "magali10@gmail.com",
		"password": "$2b$10$Pk2Bk7AwVB5OOjNwzk42ceKjA/FfrpFSnbzCflwsjkjHbeuOCa9Ie",
		"_id": "64b5d91a952bffc3cf27a7b9",
		"__v": 0
	}
}


[POST] /login
Efetuar login de usuário já cadastrado.
Requer body conforme-exemplo:
{ “nome”: “Magali”,
“email”: “magali10@gmail.com”,
“password”: “123” }
Retorna bearer token para autenticação
Resposta: HTTP 200 OK
{
           	"message": "Login efetuado com sucesso",
           	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODk3MTk3NzJ9.soiYreoniGRhknwvURcpMkJpoe4Vd_ZQXufTpcDPi88"
}


[POST] /novoJogo
Cadastrar novo jogo.
Requer body conforme-exemplo:
 {	
"nome": "The Last Of Us",
 "genero": "Drama",
"plataforma":"PC e Playstation"
}
Resposta HTTP 201 CREATED
{
	"message": "Jogo Cadastrado",
	"novoJogo": {
		"nome": "The Last Of Us",
		"genero": "Drama",
		"plataforma": "PC e Playstation",
		"_id": "64b71f1885156bb948bef943",
		"__v": 0
	}
}

[GET] /mostratodos
Exibe todos os jogos cadastrados. 
Resposta: HTTP 200 OK
{
	“message”: “Todos os jogos”,
	“resultados”: [
           	{
"_id": "64b5d6e1ec0656e11e69f974",
                           "nome": "The Last Of Us",
                           "genero": "Drama",
                          "plataforma": "PC e Playstation",
                           "__v": 0
           	}
        ]
}


[POST] /editajogo/{id}
Editar jogo a partir do ID informado.
Requer body conforme exemplo:
    {
"nome": "The Last Of Ussss",
       	"genero": "Drama",
       	"plataforma":"PC e Playstation"
}
Resposta HTTP 200 OK
{
	"message": "Jogo Atualizado",
	"encontrarJogos": {
		"_id": "64b5d6e1ec0656e11e69f974",
		"nome": "The Last Of Ussss",
		"genero": "Drama",
		"plataforma": "PC e Playstation",
		"__v": 0
	}
}


[DELETE] /deletajogo/{id}
Remove o jogo a partir do id informado .
Requer autenticação.
Resposta: HTTP 200 OK
{
           	"message": "Jogo Deletado"
}


Arquitetura do projeto:
📂 projeto-final
├─ 📂 node_modules
├─ 📂 src
│ ├─ 📂 controllers
│ │ └─ authControllers.js
│ │ └─ jogosControllers.js
│ │ └─ userControllers.js
│ ├─ 📂 database
│ │ └─ mongoConfig.js
│ ├─ 📂 middlawares
│ │ └─ auth.js
│ ├─ 📂 models
│ │ └─ jogoSchema.js
│ │ └─ userSchema.js
│ ├─ 📂 routes
│ │ └─ jogosRoutes.js
│ ├─ 📂 test
│ │ └─ app.test.js
│ │ └─ jest.setup.js
│ └─ app.js
├─ .env
├─ .env.example
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ README.md
└─ server.js


Dependências
Dependência
Versão
bcrypt
^5.0.1
cors
^2.8.5
dotenv
^16.3.1
dotenv-safe
^8.2.0
express
^4.18.2
jsonwebtoken
^9.0.0
mongoose
^7.3.1
nodemon
^2.0.22



