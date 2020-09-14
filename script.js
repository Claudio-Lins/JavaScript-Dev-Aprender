
/* let idade = 48;
let altura = 1.65;
let estdaCivil = 'Casado'
console.log(`Minda idade é: ${idade}, minha altura é: ${altura}m e meu estado civil é: ${estdaCivil}`) */

// Tipos de dados
// let nome = 'Claudio'; // String Literal
// let idade = 48; // Number Literal
// let estaAprovado = true; // Boolean (treu or False)
// let sobrenome; // Undefined
// let corSelecionada = null // Redefinir um valor posterormente

// OBJETOS
// let pessoa = {
//     nome: 'Claudio',
//     idade: 48,
//     estaAprovado: true,
//     sobreNome: 'Lins'
// }

// console.log(pessoa)


// ARRAY //
// let pessoa = ['Claudio', 48, 'Casado', 'Masculino']

// let nome = pessoa[0]
// let idade = pessoa[1]
// let estadoCivil = pessoa[2]
// let genero = pessoa[3]

// console.log(`Nome: ${nome} Idade: ${idade} Estado Cívil: ${estadoCivil} Gienero: ${genero}`)

// FUNCTIONS //

//  let corSite = 'Azul';
//  function resetaCor(cor, tonalidade) {
//      corSite = cor + tonalidade;
//  };

//  console.log(corSite)
//  resetaCor('Verde', ' Claro')
//  console.log(corSite)

// TIPOS FUNCTIONS //
// 1- Realizar uma tarefa, não devolve nasa
// function dizerNome(){
//     console.log('Claudio')
// }
// dizerNome()

// // Faz calculo ou operação e retorna algo
// function multiplicarPorDois(valor){
//     return valor* 2;
// }
// let resultado = multiplicarPorDois(5);
// console.log(resultado)


// OPERADORES //
// Operadores aritimetico (matemáticos) +, -, /, * e **
//  let salario = 100;

//  console.log(salario + salario)
//  console.log(salario - salario)
//  console.log(salario / salario)
//  console.log(salario * salario)
//  console.log(5 ** 2)
  
 // Incremento ++ --

//  let idade = 18;
//  console.log(++ idade)
//  console.log(-- idade)

//  console.log(idade += idade)


// OPERADORES DE IGUALDADE
// Igualdade etrita (Compara valor e tipo)
    // console.log(1 === 1) //true 
    // console.log('1' === 1) // false

// Igualdade solta (Compara somente valor)
    // console.log(1 == 1) //true 
    // console.log('1' == 1) // true


// OPERADORES TERNÁRIOS
// ? e :
// Se o cliente tiver 100 ou mais pontos ele é Premium caso contrário é comum
// let pontos = 99;
// let tipo = pontos >= 100 ? 'Premium' : 'Comum';

// console.log(tipo)


// OPERADORES LÓGICOS
// Operador E (&&) Retorna TRUE se as duas condições avaliadas forem true
//    console.log(true && true) // true

// let maiorIdade = true;
// let possuiCarteiraTrabalho = true;
// let podeAplicar = maiorIdade && possuiCarteiraTrabalho;

// console.log(podeAplicar)

// Operador OU (||) Retorna TRUE se uma das duas condições avaliadas forem true

// let maiorIdade = true;
// let possuiCarteiraTrabalho = false;
// let podeAplicar = maiorIdade || possuiCarteiraTrabalho;

// console.log(podeAplicar)

// Operador NOT (!) Retorna TRUE se as duas condições avaliadas forem true
//    console.log(true && true) // true

// let maiorIdade = true;
// let possuiCarteiraTrabalho = true;
// let podeAplicar = maiorIdade && possuiCarteiraTrabalho;

// console.log(podeAplicar)


//troca de vaores

// let a = 'vermelho'
// let b = 'verde'

// let c = a; // cria uma terceira variavel para preservar o valor de (a)
// a = b;
// b = c;

// console.log(a)
// console.log(b)


// CONDICIONAIS //
// IF .. ELSE

// Se a hora estiver entre às 06:00 até 12:00 = Bom dia!
// Se a hora estiver entre às 12:00 até 18:00 = Boa tarde!
// Caso contrário = Boa noite!


// function horario() {
//     let hora = new Date();
//     let horaAtual = hora.getHours;
//     console.log(hora)

//     if (hora >= 7 && hora <= 12) {
//         console.log('Bom dia!!!!')
//     } else if (hora > 12 && hora < 18) {
//         console.log('Boa Tarde!!!')
//     } else {
//         console.log('Boa noite!!!!')
//     }
// }

// horario()


// SWITCH 

let permissao;
permissao = 'gerente'

switch (permissao) {
    case 'comum':
        console.log('Usuário comum')
        break

    case 'gerente':
        console.log('Usuário Gerente')
        break

    case 'diretor':
        console.log('Usuario Diretor')
        break

    default:
        console.log('Usuário não encontrado')
}