import { Acionamento } from 'src/@types/acionamento';
import { AcionamentoModel } from '../models/AcionamentoModel.js';

class AcionamentoController{

    async insereacionamento(acionamento: Acionamento){

        const acionamentoModel = new AcionamentoModel();
        const retorno = await acionamentoModel.insereAcionamento(acionamento);

        if(retorno.length){
            console.log("O Acionamento foi inserido no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async alteraAcionamento(Id: number, acionamento: Acionamento) {

        const acionamentoModel = new AcionamentoModel();
        const retorno = await acionamentoModel.alteraAcionamento(Id, acionamento);

        if(retorno.length){
            console.log("O Acionamento foi alterado no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async selecionaAcionamento(acionamento: Acionamento){

        const acionamentoModel = new AcionamentoModel();
        const retorno = await acionamentoModel.selecionaAcionamentos(acionamento);

        if(retorno.length){
            console.log("Todos os Acionamentos foram selecionados");
        }

        return retorno

    }

    async selecionaAcionamentoPorId(acionamento: number){

        const acionamentoModel = new AcionamentoModel();
        const retorno = await acionamentoModel.selecionaAcionamentoPorId(acionamento);

        if(retorno.length){
            console.log("O Acionamento foi selecionado no banco pelo Id " + retorno);
        }

        return retorno

    }

    async selecionaAcionamentoPorNome(acionamento: string){

        const acionamentoModel = new AcionamentoModel();
        const retorno = await acionamentoModel.selecionaAcionamentoPorNome(acionamento);

        if(retorno.length){
            console.log("O Acionamento foi selecionado no banco pelo Nome " + retorno);
        }

        return retorno

    }

    async selecionaAcionamentoPoracionamento(acionamento: number){

        const acionamentoModel = new AcionamentoModel();
        const retorno = await acionamentoModel.selecionaAcionamentoPorCargo(acionamento);

        if(retorno.length){
            console.log("Os Acionamentos foram selecionados no banco pelo acionamento  " + retorno);
        }

        return retorno

    }

    async deletaAcionamento(acionamento: number){

        const acionamentoModel = new AcionamentoModel();
        const retorno = await acionamentoModel.deletaAcionamento(acionamento);

        if(retorno.length){
            console.log("O Acionamento foi deletado com sucesso com o Id " + retorno);
        }

        return retorno

    }
    
}