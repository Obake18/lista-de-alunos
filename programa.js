let aluno1 = new Aluno('foto1.jpg', "Sujiro Kimimame" , "19", "Yokohama");
let aluno2 = new Aluno('foto2.jpg', "Kabe Sadul Meup'Al", "21", "Cairo");
let aluno3 = new Aluno('foto3.jpg', "Jaq-omi Sua-MAin", "18", "Arábia Saudita");
let aluno4 = new Aluno('foto4.jpg', "Telin Habei", "24", "Qatar");
let aluno5 = new Aluno('foto5.jpg', "Seoku Miyadora", "20", "Kyoto");
let aluno6 = new Aluno('foto6.jpg', "Tomas Turbano", "25", "Maceió");
let aluno7 = new Aluno('foto7.jpg', "Paula Tejano", "22", "Maceió");
let aluno8 = new Aluno('foto8.jpg', "H. Romeu Pinto", "17", "Rio Largo");
let aluno9 = new Aluno('foto9.jpg', "Ahom Baku", "27", "Kyoto");
let aluno10 = new Aluno('foto10.jp', "Jalin Habei", "28", "Nova Dheli");

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
