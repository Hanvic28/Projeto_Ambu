var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FuncionarioModel } from '../models/FuncionarioModel.js';
class FuncionarioController {
    insereFuncionario(funcionario) {
        return __awaiter(this, void 0, void 0, function* () {
            const funcionarioModel = new FuncionarioModel();
            const retorno = yield funcionarioModel.insereFuncionario(funcionario);
            if (retorno.length) {
                console.log('O Funcionario foi inserido no banco corretamente com o Id ' + retorno);
            }
            return retorno;
        });
    }
    alteraFuncionario(Id, funcionario) {
        return __awaiter(this, void 0, void 0, function* () {
            const funcionarioModel = new FuncionarioModel();
            const retorno = yield funcionarioModel.alteraFuncionario(Id, funcionario);
            if (retorno > 0) {
                console.log('O Funcionario foi alterado no banco corretamente com o Id ' + retorno);
            }
            return retorno;
        });
    }
    selecionaFuncionario() {
        return __awaiter(this, void 0, void 0, function* () {
            const funcionarioModel = new FuncionarioModel();
            const retorno = yield funcionarioModel.selecionaFuncionarios();
            if (retorno.length) {
                console.log('Todos os Funcionarios foram selecionados');
            }
            return retorno;
        });
    }
    selecionaFuncionarioPorId(funcionario) {
        return __awaiter(this, void 0, void 0, function* () {
            const funcionarioModel = new FuncionarioModel();
            const retorno = yield funcionarioModel.selecionaFuncionarioPorId(funcionario);
            if (retorno.length) {
                console.log('O Funcionario foi selecionado no banco pelo Id ' + retorno);
            }
            return retorno;
        });
    }
    selecionaFuncionarioPorNome(funcionario) {
        return __awaiter(this, void 0, void 0, function* () {
            const funcionarioModel = new FuncionarioModel();
            const retorno = yield funcionarioModel.selecionaFuncionarioPorNome(funcionario);
            if (retorno.length) {
                console.log('O Funcionario foi selecionado no banco pelo Nome ' + retorno);
            }
            return retorno;
        });
    }
    selecionaFuncionarioPorFuncionario(funcionario) {
        return __awaiter(this, void 0, void 0, function* () {
            const funcionarioModel = new FuncionarioModel();
            const retorno = yield funcionarioModel.selecionaFuncionarioPorCargo(funcionario);
            if (retorno.length) {
                console.log('Os Funcionarios foram selecionados no banco pelo Funcionario  ' + retorno);
            }
            return retorno;
        });
    }
    deletaFuncionario(funcionario) {
        return __awaiter(this, void 0, void 0, function* () {
            const funcionarioModel = new FuncionarioModel();
            const retorno = yield funcionarioModel.deletaFuncionario(funcionario);
            if (retorno > 0) {
                console.log('O Funcionario foi deletado com sucesso com o Id ' + retorno);
            }
            return retorno;
        });
    }
}
