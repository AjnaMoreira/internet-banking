export class Funcionario {
    constructor(nome, salario, cpf) {
        this._nome = nome
        this._salarios = salario
        this._cpf = cpf

        this._bonificacao = 1
        this._senha
    }

    autenticar(senha) {
        return senha == this._senha
    }

    cadastarSenha(senha) {
        this._senha = senha
    }
}
