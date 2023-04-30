const express = require('express')
const rotas = express();

const listarCategories = require('../Controllers/Category');
const autenticarUser = require('../Middlewares/UserAutentica');
const loginUser = require('../Controllers/UserLogin');
const { cadastrarUser, detalharUser, editarUser } = require('../Controllers/User');
const validationMiddlewareUser = require('../Middlewares/userValidation');
const loginValidationMiddleware = require('../Middlewares/loginValidation')


rotas.get('/', express.static("desafio-front"));
rotas.get('/produtos', express.static("desafio-front"));
rotas.post('/login', loginValidationMiddleware, loginUser);
rotas.post('/usuario', validationMiddlewareUser, cadastrarUser);
rotas.get('/categoria', listarCategories);


rotas.use(autenticarUser);

rotas.get('/usuario', detalharUser);
rotas.put('/usuario', validationMiddlewareUser, editarUser);

module.exports = rotas;
