var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CargoModel } from '../models/CargoModel.js';
class CargoController {
    insereCargo(cargo) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargoModel = new CargoModel();
            const retorno = yield cargoModel.insereCargo(cargo);
            if (retorno.length) {
                console.log("O Cargo foi inserido no banco corretamente com o Id " + retorno);
            }
            return retorno;
        });
    }
    alteraCargo(Id, cargo) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargoModel = new CargoModel();
            const retorno = yield cargoModel.alteraCargo(Id, cargo);
            if (retorno > 0) {
                console.log("O Cargo foi alterado no banco corretamente com o Id " + retorno);
            }
            return retorno;
        });
    }
    selecionaCargo() {
        return __awaiter(this, void 0, void 0, function* () {
            const cargoModel = new CargoModel();
            const retorno = yield cargoModel.selecionaCargos();
            if (retorno.length) {
                console.log("Todos os cargos foram selecionados");
            }
            return retorno;
        });
    }
    selecionaCargoPorId(cargo) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargoModel = new CargoModel();
            const retorno = yield cargoModel.selecionaCargoPorId(cargo);
            if (retorno.length) {
                console.log("O Cargo foi selecionado no banco pelo Id " + retorno);
            }
            return retorno;
        });
    }
    selecionaCargoPorNome(cargo) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargoModel = new CargoModel();
            const retorno = yield cargoModel.selecionaCargoPorNome(cargo);
            if (retorno.length) {
                console.log("O Cargo foi selecionado no banco pelo Nome " + retorno);
            }
            return retorno;
        });
    }
    selecionaCargoPorCargo(cargo) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargoModel = new CargoModel();
            const retorno = yield cargoModel.selecionaCargoPorCargo(cargo);
            if (retorno.length) {
                console.log("Os Cargos foram selecionados no banco pelo Cargo  " + retorno);
            }
            return retorno;
        });
    }
    deletaCargo(cargo) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargoModel = new CargoModel();
            const retorno = yield cargoModel.deletaCargo(cargo);
            if (retorno > 0) {
                console.log("O Cargo foi deletado com sucesso com o Id " + retorno);
            }
            return retorno;
        });
    }
}
