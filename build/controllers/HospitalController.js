var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { HospitalModel } from '../models/HospitalModel.js';
import Joi from 'joi';
export class HospitalController {
    insereHospital(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield validaEntrada(req.body);
            if (req.body.nome == 'Alexandre') {
                throw new Error('Não existe');
            }
            const hospitalModel = new HospitalModel();
            const retorno = yield hospitalModel.insereHospital(req.body);
            res.status(201).send('Objeto Inserido ' + retorno);
        });
    }
    alteraHospital(Id, hospital) {
        return __awaiter(this, void 0, void 0, function* () {
            const hospitalModel = new HospitalModel();
            const retorno = yield hospitalModel.alteraHospital(Id, hospital);
            if (retorno > 0) {
                console.log('O Hospital foi alterado no banco corretamente com o Id ' + retorno);
            }
            return retorno;
        });
    }
    selecionaHospital(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hospitalModel = new HospitalModel();
            const retorno = yield hospitalModel.selecionaHospital();
            if (retorno.length) {
                res.status(200).send(retorno);
            }
            return retorno;
        });
    }
    selecionaHospitalPorId(hospital) {
        return __awaiter(this, void 0, void 0, function* () {
            const hospitalModel = new HospitalModel();
            const retorno = yield hospitalModel.selecionaHospitalPorId(hospital);
            if (retorno.length) {
                console.log('O Hospital foi selecionado no banco pelo Id ' + retorno);
            }
            return retorno;
        });
    }
    selecionaHospitalPorNome(hospital) {
        return __awaiter(this, void 0, void 0, function* () {
            const hospitalModel = new HospitalModel();
            const retorno = yield hospitalModel.selecionaHospitalPorNome(hospital);
            if (retorno.length) {
                console.log('O Hospital foi selecionado no banco pelo Nome ' + retorno);
            }
            return retorno;
        });
    }
    selecionaHospitalPorHospital(hospital) {
        return __awaiter(this, void 0, void 0, function* () {
            const hospitalModel = new HospitalModel();
            const retorno = yield hospitalModel.selecionaHospitalPorCargo(hospital);
            if (retorno.length) {
                console.log('Os Hospitals foram selecionados no banco pelo Hospital  ' + retorno);
            }
            return retorno;
        });
    }
    deletaHospital(hospital) {
        return __awaiter(this, void 0, void 0, function* () {
            const hospitalModel = new HospitalModel();
            const retorno = yield hospitalModel.deletaHospital(hospital);
            if (retorno > 0) {
                console.log('O Hospital foi deletado com sucesso com o Id ' + retorno);
            }
            return retorno;
        });
    }
}
function validaEntrada(dadosEntrada) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const schema = Joi.object({
                nome: Joi.string().min(4).max(150).required(),
                telefone: Joi.string().required(),
            });
            const value = yield schema.validateAsync(dadosEntrada);
        }
        catch (erro) {
            throw new Error('Erro de validação');
        }
    });
}
