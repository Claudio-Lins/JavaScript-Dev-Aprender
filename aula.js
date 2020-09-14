function horario() {
    let hora = 19;

    if (hora >= 7 && hora <= 12) {
        console.log('Bom dia!!!!')
    } else if (hora > 12 && hora < 18) {
        console.log('Boa Tarde!!!')
    } else {
        console.log('Boa noite!!!!')
    }
}

horario()