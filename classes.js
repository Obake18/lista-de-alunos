class Aluno{
    constructor(foto,primeiroNome, segundoNome, birthDate, cidade)
    {
        this.foto = foto;
        this.primeiroNome = primeiroNome
        this.segundoNome = segundoNome
        this.birthDate = birthDate;
        this.cidade = cidade;
    }

    getNome(){
        return `${this.primeiroNome} ${this.segundoNome}`;

}
    getIdade(){
        let hj = new Date();
        let idade = hj.getFullYear() - this.birthDate.getFullYear();
        return idade;
    
    }
}
