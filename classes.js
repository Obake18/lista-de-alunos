class Aluno{
    constructor(foto,primeiroNome, segundoNome, idade, cidade)
    {
        this.foto = foto;
        this.primeiroNome = primeiroNome
        this.segundoNome = segundoNome
        this.idade = idade;
        this.cidade = cidade;

        getNome(){
            return `${this.primeiroNome} ${this.segundoNome}`;
    
    }
    
    }

}