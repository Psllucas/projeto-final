//fazer função de criação de usuário

const mongoose = require("mongoose")
const userSchema = require("../models/userSchema")
const bcrypt = require("bcrypt");
//inicia o bcrypt para criptografar senhas

const criaCadastro = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword
  const emailExists = await userSchema.exists({ email: req.body.email })
  if (emailExists) {
    return res.status(409).send({
      message: 'Conflito: Email já cadastrado',
    })
  }
  try {
    const novousuario = new userSchema(req.body)
    const savedUser = await novousuario.save()
    res.status(201).send({
      message: 'Usuário criado com sucesso',
      savedUser,
    })
  } catch (err) {
    console.error(err)
    res.status(500).send({
      message: err.message,
    })
  }
}

module.exports = {
    criaCadastro
}