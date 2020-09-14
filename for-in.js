const pessoa = {
    nome: 'Claudio',
    idade: 48
}

for(let chave in pessoa) {
    console.log(chave,pessoa['nome'])
}