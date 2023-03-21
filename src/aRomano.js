function aRomano(numero){
    const valoresRomanos = [
        { valor: 100, simbolo: 'C' },
        { valor: 90, simbolo: 'XC' },
        { valor: 50, simbolo: 'L' },
        { valor: 40, simbolo: 'XL' },
        { valor: 10, simbolo: 'X' },
        { valor: 9, simbolo: 'IX' },
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