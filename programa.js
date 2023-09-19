let aluno1 = new Aluno('foto1.jpg', "Alice", "19", "Amsterdam");
let aluno2 = new Aluno('foto2.jpg', "Benjamin", "21", "Barcelona");
let aluno3 = new Aluno('foto3.jpg', "Clara", "18", "Chicago");
let aluno4 = new Aluno('foto4.jpg', "Daniel", "24", "Dublin");
let aluno5 = new Aluno('foto5.jpg', "Emily", "20", "Edinburgh");
let aluno6 = new Aluno('foto6.jpg', "Felipe", "25", "Florença");
let aluno7 = new Aluno('foto7.jpg', "Grace", "22", "Honolulu");
let aluno8 = new Aluno('foto8.jpg', "Henry", "17", "Istambul");
let aluno9 = new Aluno('foto9.jpg', "Isabella", "27", "Kyoto");
let aluno10 = new Aluno('foto10.jpg', "Jack", "28", "Londres");


let listaDeAluno = [];

listaDeAluno.push(aluno1);
listaDeAluno.push(aluno2);
listaDeAluno.push(aluno3);
listaDeAluno.push(aluno4);
listaDeAluno.push(aluno5);
listaDeAluno.push(aluno6);
listaDeAluno.push(aluno7);
listaDeAluno.push(aluno8);
listaDeAluno.push(aluno9);
listaDeAluno.push(aluno10);

for (let i = 0; i < listaDeAluno.length; i++) {
    document.write(`
    <div class="card">
        <img class="foto" src="img/${listaDeAluno[i].foto}" />
        <div class="nome"><h1>${listaDeAluno[i].nome}</h1></div>
        <div><h3>${listaDeAluno[i].idade}</h3></div>
        <div><h3>${listaDeAluno[i].cidade}</h3></div>
    </div>
    `);
}
