import { FuncionarioModel } from '../models/FuncionarioModel.js';
import { Funcionario } from 'src/@types/funcionario';

class FuncionarioController{

    async insereFuncionario(funcionario: Funcionario):Promise<number[]> {

        const funcionarioModel = new FuncionarioModel();
        const retorno: number[] = await funcionarioModel.insereFuncionario(funcionario);

        if(retorno.length){
            console.log("O Funcionario foi inserido no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async alteraFuncionario(Id: number, funcionario: Funcionario):Promise<number> {

        const funcionarioModel = new FuncionarioModel();
        const retorno: number = await funcionarioModel.alteraFuncionario(Id, funcionario);

        if(retorno > 0){
            console.log("O Funcionario foi alterado no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async selecionaFuncionario():Promise<Funcionario[]> {

        const funcionarioModel = new FuncionarioModel();
        const retorno: Funcionario[] = await funcionarioModel.selecionaFuncionarios();

        if(retorno.length){
            console.log("Todos os Funcionarios foram selecionados");
        }

         return retorno

    }

    async selecionaFuncionarioPorId(funcionario: number):Promise<Funcionario[]> {

        const funcionarioModel = new FuncionarioModel();
        const retorno: Funcionario[] = await funcionarioModel.selecionaFuncionarioPorId(funcionario);

        if(retorno.length){
            console.log("O Funcionario foi selecionado no banco pelo Id " + retorno);
        }

        return retorno

    }

    async selecionaFuncionarioPorNome(funcionario: string):Promise<Funcionario[]> {

        const funcionarioModel = new FuncionarioModel();
        const retorno: Funcionario[] = await funcionarioModel.selecionaFuncionarioPorNome(funcionario);

        if(retorno.length){
            console.log("O Funcionario foi selecionado no banco pelo Nome " + retorno);
        }

        return retorno

    }

    async selecionaFuncionarioPorFuncionario(funcionario: number):Promise<Funcionario[]> {

        const funcionarioModel = new FuncionarioModel();
        const retorno: Funcionario[] = await funcionarioModel.selecionaFuncionarioPorCargo(funcionario);

        if(retorno.length){
            console.log("Os Funcionarios foram selecionados no banco pelo Funcionario  " + retorno);
        }

        return retorno

    }

    async deletaFuncionario(funcionario: number):Promise<number> {

        const funcionarioModel = new FuncionarioModel();
        const retorno: number = await funcionarioModel.deletaFuncionario(funcionario);

        if(retorno > 0){
            console.log("O Funcionario foi deletado com sucesso com o Id " + retorno);
        }

        return retorno

    }
    
}
