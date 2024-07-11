
const knex = require('./conexao.js')

class FuncionarioModel{

    async insereFuncionario(funcionario){
        const retorno = await knex('funcionario').insert({nome: funcionario.nome, telefone: funcionario.telefone, data_nascimento: funcionario.data_nascimento, sexo: funcionario.sexo});
        return retorno
    };

    async alteraFuncionario(Id, funcionario){
        const retorno = await knex('funcionario').update({nome: funcionario.nome, telefone: funcionario.telefone, data_nascimento: funcionario.data_nascimento, sexo: funcionario.sexo}).where('Id', Id);
        return retorno
    };

    async selecionaFuncionarios(){
        const retorno = await knex('funcionario').select();
        return retorno
    };

    async selecionaFuncionarioPorId(Id){
        const retorno = await knex('funcionario').select().where('Id', Id);
        return retorno
    };

    async selecionaFuncionarioPorNome(nome){
        const retorno = await knex('funcionario').select().where('nome','Like', `%${nome}%`);
        return retorno
    };

    async selecionaFuncionarioPorCargo(Id){
        const retorno = await knex('funcionario').select().where('cargo_Id', Id);
        return retorno
    };

    async deletaFuncionario(Id){
        const retorno = await knex('funcionario').del().where('Id', Id);
        return retorno
    };
}

module.exports = FuncionarioModel;
