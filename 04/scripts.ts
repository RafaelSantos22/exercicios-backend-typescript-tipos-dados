type Produto = {
    produto: string;
    lote: number;
    ano: number;
    qtd: number;
}

const impressao = (produto: Produto): string[] => {
    let resultado: string[] = [];

    for (let i = 1; i <= produto.qtd; i++) {
        const etiquetas = `${produto.lote}-${produto.ano}-${i.toString().padStart(3, '0')}`;
        resultado.push(etiquetas);
    }

    return resultado;
}

console.log(impressao({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}));
