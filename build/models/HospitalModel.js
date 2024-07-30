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
export class HospitalModel {
    insereHospital(hospital) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const retorno = yield dbConn('hospital').insert(hospital);
                return retorno;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    alteraHospital(Id, hospital) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('hospital')
                .update({ nome: hospital.nome, nome_contato: hospital.nome_contato, telefone: hospital.telefone })
                .where('Id', Id);
            return retorno;
        });
    }
    selecionaHospital() {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('hospital').select();
            return retorno;
        });
    }
    selecionaHospitalPorId(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('hospital').select().where('Id', Id);
            return retorno;
        });
    }
    selecionaHospitalPorNome(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('hospital').select().where('nome', 'Like', `%${nome}%`);
            return retorno;
        });
    }
    selecionaHospitalPorCargo(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('hospital').select().where('cargo_Id', Id);
            return retorno;
        });
    }
    deletaHospital(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const retorno = yield dbConn('hospital').del().where('Id', Id);
            return retorno;
        });
    }
}
