const { cpf } = require("cpf-cnpj-validator");

function validacao(numero) {
  let valid = cpf.isValid(numero);
  if (valid === true) {
    console.log("CPF válido");
  } else {
    console.log("CPF inválido");
  }
}

const teste = '0b807592558'

validacao(teste)
