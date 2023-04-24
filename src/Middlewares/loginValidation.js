const express = require('express');
const messages =require ('joi-translation-pt-br')
const schema = require("../models/userSchema");
const { request } = require('../routes/Rotas');
 
const loginValidationMiddlewareUser = (request, response, next) => {
  const { email, senha } = request.body
  const result = schema.schema.validate({email:email,senha:senha}, {messages})

  if(result.error){
    console.log(result.error.details)
  }
    
    response.status(400).json({  "mensagem": "Todos os campos obrigatórios devem ser informados." })
  
}

module.exports = validationMiddlewareUser