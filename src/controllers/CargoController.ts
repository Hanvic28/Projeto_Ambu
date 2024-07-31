import { Cargo } from 'src/@types/cargo';
import { CargoModel } from '../models/CargoModel.js';

class CargoController{

    async insereCargo(cargo: Cargo):Promise<number[]> {

        const cargoModel = new CargoModel();
        const retorno: number[] = await cargoModel.insereCargo(cargo);

        if(retorno.length){
            console.log("O Cargo foi inserido no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async alteraCargo(Id: number, cargo: Cargo):Promise<number> {

        const cargoModel = new CargoModel();
        const retorno: number = await cargoModel.alteraCargo(Id, cargo);

        if(retorno > 0){
            console.log("O Cargo foi alterado no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async selecionaCargo():Promise<Cargo[]> {

        const cargoModel = new CargoModel();
        const retorno: Cargo[] = await cargoModel.selecionaCargos();

        if(retorno.length){
            console.log("Todos os cargos foram selecionados");
        }

        return retorno

    }

    async selecionaCargoPorId(cargo: number):Promise<Cargo[]> {

        const cargoModel = new CargoModel();
        const retorno: Cargo[] = await cargoModel.selecionaCargoPorId(cargo);

        if(retorno.length){
            console.log("O Cargo foi selecionado no banco pelo Id " + retorno);
        }

        return retorno

    }

    async selecionaCargoPorNome(cargo: string):Promise<Cargo[]> {

        const cargoModel = new CargoModel();
        const retorno: Cargo[] = await cargoModel.selecionaCargoPorNome(cargo);

        if(retorno.length){
            console.log("O Cargo foi selecionado no banco pelo Nome " + retorno);
        }

        return retorno

    }

    async selecionaCargoPorCargo(cargo: number):Promise<Cargo[]> {

        const cargoModel = new CargoModel();
        const retorno: Cargo[] = await cargoModel.selecionaCargoPorCargo(cargo);

        if(retorno.length){
            console.log("Os Cargos foram selecionados no banco pelo Cargo  " + retorno);
        }

        return retorno

    }

    async deletaCargo(cargo: number):Promise<number> {

        const cargoModel = new CargoModel();
        const retorno: number = await cargoModel.deletaCargo(cargo);

        if(retorno > 0){
            console.log("O Cargo foi deletado com sucesso com o Id " + retorno);
        }

        return retorno

    }
    
}