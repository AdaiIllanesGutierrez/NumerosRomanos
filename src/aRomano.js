function aRomano(numero){
    const valoresRomanos = [
        { valor: 5, simbolo: 'V' },
        { valor: 4, simbolo: 'IV' },
        { valor: 1, simbolo: 'I' }
    ];
    let resultado = '';
    for (let i = 0; i < valoresRomanos.length; i++) {
        while (numero >= valoresRomanos[i].valor) {
          resultado += valoresRomanos[i].simbolo;
          numero -= valoresRomanos[i].valor;
        }
    }
    return resultado;
}
export default aRomano;