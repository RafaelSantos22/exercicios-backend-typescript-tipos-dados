const filtrarusuarios = (lista: {nome: string, idade: number, status: boolean}[], nome: string): {nome: string, idade: number, status: boolean}[]  => {
    let usuariosEncontrados = [];

    for (const usuario of lista) {
        if (usuario.nome.toLowerCase().includes(nome.toLowerCase())) {
            usuariosEncontrados.push(usuario);
        }
    }

    return usuariosEncontrados;
}

const listaUsuarios = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
];

console.log(filtrarusuarios(listaUsuarios, 'Joao'));
