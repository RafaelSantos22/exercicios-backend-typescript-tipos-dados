const tabuada = (array: number[]) => {
    let resultado: string = '';

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j <= 10; j++) {
            resultado += `${array[i]} x ${j} = ${array[i] * j}\n`;
        }
        resultado += "---------------\n";
    }

    return resultado;
}

console.log(tabuada([1, 5, 2]));
