const { cpf , cnpj } = require("cpf-cnpj-validator");

function validacaoCpf(numero) {
  let valid = cpf.isValid(numero);
  if (valid === true) {
    console.log("CPF válido");
  } else {
    console.log("CPF inválido");
  }
}

function validacaoCnpj(numero) {
  let valid = cnpj.isValid(numero);
  if (valid === true) {
    console.log("CNPJ válido");
  } else {
    console.log("CNPJ inválido");
  }
}

const teste = cpf.generate();
validacaoCpf(teste)

const abc = cnpj.generate();
validacaoCnpj(abc)

