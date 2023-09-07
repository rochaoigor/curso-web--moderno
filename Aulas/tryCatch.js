function tratarError(erro) {
    //throw new Error('...')

    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}


function imprimirNome(obj) {

    try {
        console.log(obj.name.toUpperCase())

    }
    catch(e) {
        tratarError(e)
    }

}

const obj = {
nome:'Roberto'
}

imprimirNome(obj)