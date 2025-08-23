// 1. Criação de um Objeto JSON
let aluno = {
    nome: "João Silva",
    idade: 21,
    curso: "Engenharia de Software",
    notas: [7.5, 8.0, 9.0]
};

// 2. Acesso a Propriedades
console.log("Nome do aluno:", aluno.nome);
console.log("Primeira nota:", aluno.notas[0]);

// 3. Modificação de Propriedades
aluno.idade = 22;
aluno.notas.push(10);
console.log("Idade atualizada:", aluno.idade);
console.log("Notas após adição:", aluno.notas);

// 4. Conversão para String
let alunoString = JSON.stringify(aluno);
console.log("Objeto em formato JSON:", alunoString);

// 5. Conversão para Objeto
let alunoObjeto = JSON.parse(alunoString);
console.log("Objeto convertido de volta:", alunoObjeto);

// 6. Iteração sobre Propriedades
console.log("Propriedades do aluno:");
for (let prop in alunoObjeto) {
    console.log(prop + ":", alunoObjeto[prop]);
}

// 7. Cálculo da Média das Notas
let soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
let media = soma / aluno.notas.length;
console.log("Média das notas:", media.toFixed(2));

// 8. Criação de Objeto JSON Aninhado
aluno.endereco = {
    rua: "Rua das Flores",
    cidade: "São Paulo",
    estado: "SP"
};

// 9. Acesso a Dados Aninhados
console.log("Cidade:", aluno.endereco.cidade);
console.log("Estado:", aluno.endereco.estado);

// 10. Lista de Alunos
let alunos = [
    aluno,
    {
        nome: "Maria Oliveira",
        idade: 23,
        curso: "Ciência da Computação",
        notas: [9.0, 8.5, 9.5],
        endereco: { rua: "Av. Central", cidade: "Rio de Janeiro", estado: "RJ" }
    },
    {
        nome: "Carlos Souza",
        idade: 20,
        curso: "Sistemas de Informação",
        notas: [6.0, 7.0, 6.5],
        endereco: { rua: "Rua A", cidade: "Belo Horizonte", estado: "MG" }
    }
];

// 11. Filtragem de Alunos (média > 8)
let alunosAprovados = alunos.filter(a => {
    let somaNotas = a.notas.reduce((acc, nota) => acc + nota, 0);
    let mediaAluno = somaNotas / a.notas.length;
    return mediaAluno > 8;
});

console.log("Alunos com média maior que 8:", alunosAprovados);
