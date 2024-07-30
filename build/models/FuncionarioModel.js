var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { dbConn } from '../models/conexao.js';
export class FuncionarioModel {
    insereFuncionario(funcionario) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('funcionario').insert({
                nome: funcionario.nome,
                telefone: funcionario.telefone,
                data_nascimento: funcionario.data_nascimento,
                sexo: funcionario.sexo,
            });
            return retorno;
        });
    }
    alteraFuncionario(Id, funcionario) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('funcionario')
                .update({ nome: funcionario.nome, telefone: funcionario.telefone, data_nascimento: funcionario.data_nascimento, sexo: funcionario.sexo })
                .where('Id', Id);
            return retorno;
        });
    }
    selecionaFuncionarios() {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('funcionario').select();
            return retorno;
        });
    }
    selecionaFuncionarioPorId(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('funcionario').select().where('Id', Id);
            return retorno;
        });
    }
    selecionaFuncionarioPorNome(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('funcionario').select().where('nome', 'Like', `%${nome}%`);
            return retorno;
        });
    }
    selecionaFuncionarioPorCargo(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('funcionario').select().where('cargo_Id', Id);
            return retorno;
        });
    }
    deletaFuncionario(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('funcionario').del().where('Id', Id);
            return retorno;
        });
    }
}
