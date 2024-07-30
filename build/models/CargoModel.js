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
export class CargoModel {
    //Insere um novo cargo no banco de dados a partir de um objeto cargo
    insereCargo(cargo) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('cargo').insert({ nome_cargo: cargo.nome_cargo });
            return retorno;
        });
    }
    alteraCargo(Id, cargo) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('cargo').update({ nome_cargo: cargo.nome_cargo }).where('Id', Id);
            return retorno;
        });
    }
    selecionaCargos() {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('cargo').select();
            return retorno;
        });
    }
    selecionaCargoPorId(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('cargo').select().where('Id', Id);
            return retorno;
        });
    }
    selecionaCargoPorNome(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('cargo').select().where('nome', 'Like', `%${nome}%`);
            return retorno;
        });
    }
    selecionaCargoPorCargo(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('cargo').select().where('cargo_Id', Id);
            return retorno;
        });
    }
    deletaCargo(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('cargo').del().where('Id', Id);
            return retorno;
        });
    }
}
