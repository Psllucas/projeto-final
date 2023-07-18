const mongoose = require("mongoose");

const jogoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    plataforma: {
        type: String,
        required: false
    }
});

module.exports=mongoose.model('jogo', jogoSchema);