//fazer testes aqui
const app = require('../app')
const request = require('supertest')
const model = require('../models/jogoSchema')
const { get } = require('mongoose')

describe('jogosControllers', () => {
    const jogoMock = {
        nome: "Emancipation",
        diretor: "Antoine Fuqua",
        categoria: "Drama/Ação"
    }
    beforeAll(async () => {
        const novoJogo = new model(jogoMock)
        await novoJogo.save()
        jogoMock.id = novoJogo._id
    })
    test('GET /mostratodos', (done) => {
        request(app)
            .get('/jogos/mostratodos')
            .expect(200)
            .expect(res => {
                expect(res.body.message).toBe("Todos os Jogos")
            })
            .end(err => {
                if (err) return done(err)
                return done()
            })
    })
    test('POST /novoJogo', (done) => {
        const jogoBody = {
            "nome": "Emancipation",
            "diretor": "Antoine Fuqua",
            "categoria": "Drama/Ação"
        }
        request(app)
            .post('/jogos/novoJogo')
            .send(jogoBody)
            .expect(201)
            .expect(res => {
                expect(res.body.message).toBe("Jogo Cadastrado")
            })
            .end(err => {
                if (err) return done(err)
                return done()
            })
    })
    test('PATCH /editajogo/:id', (done) => {
        const jogoBody2 = {
            "nome": "Palmer",
            "diretor": "Fisher Stevens"
        }
        request(app)
            .patch('/jogos/editajogo/' + jogoMock.id)
            .send(jogoBody2)
            .expect(200)
            .expect(res => {
                expect(res.body.message).toBe("Jogo Atualizado")
            })
            .end(err => {
                if (err) return done(err)
                return done()
            })
    })
    test('DELETE /deletajogo/:id', (done) => {
        request(app)
            .delete('/jogos/deletajogo/' + jogoMock.id)
            .expect(200)
            .expect(res => {
                expect(res.body.message).toBe("Jogo Deletado")
            })
            .end(err => {
                if (err) return done(err)
                return done()
            })
    })
});