const mongoose = require("mongoose")
const jogoSchema = require("../models/jogoSchema")

const exibeTodos = async(req,res)=>{
    let query = { }
    try {
        const todosResultados= await jogoSchema.find(query)
        res.status(200).json({
            message: "Todos os Jogos",
            resultados: todosResultados})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const cadastraJogo = async(req,res)=>{
    try {
        const { nome, genero, plataforma } = req.body
        const novoJogo = new jogoSchema({
            nome: nome,
            genero: genero,
            plataforma: plataforma
        })
        const salvaJogo = await novoJogo.save()
        res.status(201).json({
            message: "Jogo Cadastrado",
            novoJogo: salvaJogo
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

const atualizaJogo = async(req,res)=>{
    const { nome, genero, plataforma } =req.body
    try {
        const encontrarJogos = await jogoSchema.findById(req.params.id)
    if (!encontrarJogos){
        return res.status(404).send({
            message: "Filme não encontrado"
        })
    }
    if(nome) encontrarJogos.nome=nome
    if(genero) encontrarJogos.genero=genero
    if(plataforma) encontrarJogos.plataforma=plataforma
    const salvarJogo = await encontrarJogos.save()
    res.status(200).json({
        message: "Jogo Atualizado",
        encontrarJogos: salvarJogo})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deletaJogo = async(req,res)=>{
    try {
        const resultadoBusca = await jogoSchema.findById(req.params.id)
        await resultadoBusca.deleteOne()
        res.status(200).json({
            message: "Jogo Deletado"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports={
    exibeTodos,
    cadastraJogo,
    atualizaJogo,
    deletaJogo
}