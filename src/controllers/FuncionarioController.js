const FuncionarioModel = require('../models/FuncionarioModel.js');

class FuncionarioController{

    async insereFuncionario(funcionario){

        const funcionarioModel = new FuncionarioModel();
        const retorno = await FuncionarioModel.insereFuncionario(funcionario);

        if(retorno.length){
            console.log("O Funcionario foi inserido no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async alteraFuncionario(funcionario){

        const funcionarioModel = new FuncionarioModel();
        const retorno = await FuncionarioModel.alteraFuncionario(funcionario);

        if(retorno.length){
            console.log("O Funcionario foi alterado no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async selecionaFuncionario(funcionario){

        const funcionarioModel = new FuncionarioModel();
        const retorno = await FuncionarioModel.selecionaFuncionario(funcionario);

        if(retorno.length){
            console.log("Todos os Funcionarios foram selecionados");
        }

         return retorno

    }

    async selecionaFuncionarioPorId(funcionario){

        const funcionarioModel = new FuncionarioModel();
        const retorno = await FuncionarioModel.selecionaFuncionarioPorId(funcionario);

        if(retorno.length){
            console.log("O Funcionario foi selecionado no banco pelo Id " + retorno);
        }

        return retorno

    }

    async selecionaFuncionarioPorNome(funcionario){

        const funcionarioModel = new FuncionarioModel();
        const retorno = await FuncionarioModel.selecionaFuncionarioPorNome(funcionario);

        if(retorno.length){
            console.log("O Funcionario foi selecionado no banco pelo Nome " + retorno);
        }

        return retorno

    }

    async selecionaFuncionarioPorFuncionario(funcionario){

        const funcionarioModel = new FuncionarioModel();
        const retorno = await FuncionarioModel.selecionaFuncionarioPorCargo(funcionario);

        if(retorno.length){
            console.log("Os Funcionarios foram selecionados no banco pelo Funcionario  " + retorno);
        }

        return retorno

    }

    async deletaFuncionario(funcionario){

        const funcionarioModel = new FuncionarioModel();
        const retorno = await FuncionarioModel.deletaFuncionario(funcionario);

        if(retorno.length){
            console.log("O Funcionario foi deletado com sucesso com o Id " + retorno);
        }

        return retorno

    }
    
}
