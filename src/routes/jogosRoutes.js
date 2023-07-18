const express = require("express");
const router = express.Router();

const jogosController = require("../controllers/jogosControllers")
const userController = require("../controllers/userControllers");
const authController = require("../controllers/authControllers");

const { checkAuth } = require("../middlewares/auth");


//rotas comuns
router.get("/mostratodos", jogosController.exibeTodos)
router.post("/novojogo", jogosController.cadastraJogo)
router.patch("/editajogo/:id", jogosController.atualizaJogo)
router.delete("/deletajogo/:id", jogosController.deletaJogo)

//rotas para USUARIOS
router.post("/criar", userController.criaCadastro)

//rotas de autenticação
router.post("/login", authController.login);

module.exports = router;