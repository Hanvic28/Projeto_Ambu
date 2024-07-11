const CargoModel = require('../models/CargoModel.js');

class CargoController{

    async insereCargo(cargo){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.insereCargo(cargo);

        if(retorno.length){
            console.log("O Cargo foi inserido no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async alteraCargo(cargo){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.alteraCargo(cargo);

        if(retorno.length){
            console.log("O Cargo foi alterado no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async selecionaCargo(cargo){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.selecionaCargo(cargo);

        if(retorno.length){
            console.log("Todos os cargos foram selecionados");
        }

        return retorno

    }

    async selecionaCargoPorId(cargo){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.selecionaCargoPorId(cargo);

        if(retorno.length){
            console.log("O Cargo foi selecionado no banco pelo Id " + retorno);
        }

        return retorno

    }

    async selecionaCargoPorNome(cargo){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.selecionaCargoPorNome(cargo);

        if(retorno.length){
            console.log("O Cargo foi selecionado no banco pelo Nome " + retorno);
        }

        return retorno

    }

    async selecionaCargoPorCargo(cargo){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.selecionaCargoPorCargo(cargo);

        if(retorno.length){
            console.log("Os Cargos foram selecionados no banco pelo Cargo  " + retorno);
        }

        return retorno

    }

    async deletaCargo(cargo){

        const cargoModel = new CargoModel();
        const retorno = await cargoModel.deletaCargo(cargo);

        if(retorno.length){
            console.log("O Cargo foi deletado com sucesso com o Id " + retorno);
        }

        return retorno

    }
    
}