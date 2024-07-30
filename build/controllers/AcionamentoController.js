var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AcionamentoModel } from '../models/AcionamentoModel.js';
class AcionamentoController {
    insereacionamento(acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const acionamentoModel = new AcionamentoModel();
            const retorno = yield acionamentoModel.insereAcionamento(acionamento);
            if (retorno.length) {
                console.log('O Acionamento foi inserido no banco corretamente com o Id ' + retorno);
            }
            return retorno;
        });
    }
    alteraAcionamento(Id, acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const acionamentoModel = new AcionamentoModel();
            const retorno = yield acionamentoModel.alteraAcionamento(Id, acionamento);
            if (retorno > 0) {
                console.log('O Acionamento foi alterado no banco corretamente com o Id ' + retorno);
            }
            return retorno;
        });
    }
    selecionaAcionamento(acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const acionamentoModel = new AcionamentoModel();
            const retorno = yield acionamentoModel.selecionaAcionamentos(acionamento);
            if (retorno.length) {
                console.log('Todos os Acionamentos foram selecionados');
            }
            return retorno;
        });
    }
    selecionaAcionamentoPorId(acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const acionamentoModel = new AcionamentoModel();
            const retorno = yield acionamentoModel.selecionaAcionamentoPorId(acionamento);
            if (retorno.length) {
                console.log('O Acionamento foi selecionado no banco pelo Id ' + retorno);
            }
            return retorno;
        });
    }
    selecionaAcionamentoPorNome(acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const acionamentoModel = new AcionamentoModel();
            const retorno = yield acionamentoModel.selecionaAcionamentoPorNome(acionamento);
            if (retorno.length) {
                console.log('O Acionamento foi selecionado no banco pelo Nome ' + retorno);
            }
            return retorno;
        });
    }
    selecionaAcionamentoPoracionamento(acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const acionamentoModel = new AcionamentoModel();
            const retorno = yield acionamentoModel.selecionaAcionamentoPorCargo(acionamento);
            if (retorno.length) {
                console.log('Os Acionamentos foram selecionados no banco pelo acionamento  ' + retorno);
            }
            return retorno;
        });
    }
    deletaAcionamento(acionamento) {
        return __awaiter(this, void 0, void 0, function* () {
            const acionamentoModel = new AcionamentoModel();
            const retorno = yield acionamentoModel.deletaAcionamento(acionamento);
            if (retorno > 0) {
                console.log('O Acionamento foi deletado com sucesso com o Id ' + retorno);
            }
            return retorno;
        });
    }
}
