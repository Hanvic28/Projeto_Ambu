import { Cargo } from 'src/@types/cargo';
import { CargoModel } from '../models/CargoModel.js';

class CargoController{

    async insereCargo(cargo: Cargo){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.insereCargo(cargo);

        if(retorno.length){
            console.log("O Cargo foi inserido no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async alteraCargo(Id: number, cargo: Cargo){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.alteraCargo(Id, cargo);

        if(retorno.length){
            console.log("O Cargo foi alterado no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async selecionaCargo(){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.selecionaCargos();

        if(retorno.length){
            console.log("Todos os cargos foram selecionados");
        }

        return retorno

    }

    async selecionaCargoPorId(cargo: number){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.selecionaCargoPorId(cargo);

        if(retorno.length){
            console.log("O Cargo foi selecionado no banco pelo Id " + retorno);
        }

        return retorno

    }

    async selecionaCargoPorNome(cargo: string){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.selecionaCargoPorNome(cargo);

        if(retorno.length){
            console.log("O Cargo foi selecionado no banco pelo Nome " + retorno);
        }

        return retorno

    }

    async selecionaCargoPorCargo(cargo: number){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.selecionaCargoPorCargo(cargo);

        if(retorno.length){
            console.log("Os Cargos foram selecionados no banco pelo Cargo  " + retorno);
        }

        return retorno

    }

    async deletaCargo(cargo: number){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.deletaCargo(cargo);

        if(retorno.length){
            console.log("O Cargo foi deletado com sucesso com o Id " + retorno);
        }

        return retorno

    }
    
}