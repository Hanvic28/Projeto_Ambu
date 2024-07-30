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
export class AcionamentoModel {
    insereAcionamento(acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('acionamento').insert({ data_hora: acionamento.data_hora, vaga_confirmada: acionamento.vaga_comfirmada });
            return retorno;
        });
    }
    alteraAcionamento(Id, acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('acionamento')
                .update({ data_hora: acionamento.data_hora, vaga_confirmada: acionamento.vaga_comfirmada })
                .where('Id', Id);
            return retorno;
        });
    }
    selecionaAcionamentos(acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('acionamento').select();
            return retorno;
        });
    }
    selecionaAcionamentoPorId(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('acionamento').select().where('Id', Id);
            return retorno;
        });
    }
    selecionaAcionamentoPorNome(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('acionamento').select().where('nome', 'Like', `%${nome}%`);
            return retorno;
        });
    }
    selecionaAcionamentoPorCargo(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('acionamento').select().where('cargo_Id', Id);
            return retorno;
        });
    }
    deletaAcionamento(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('acionamento').del().where('Id', Id);
            return retorno;
        });
    }
}
