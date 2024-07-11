const HospitalModel = require('../models/HospitalModel.js');
const Joi = require('joi')

class HospitalController{

    async insereHospital(req, res){

            await validaEntrada(req.body);

            if(req.body.nome == 'Alexandre'){
                throw new Error("Não existe")
            };

        const hospitalModel = new HospitalModel();
        const retorno = await hospitalModel.insereHospital(req.body);

        res.status(201).send("Objeto Inserido " + retorno)

    }

    async alteraHospital(hospital){

        const hospitalModel = new HospitalModel();
        const retorno = await HospitalModel.alteraHospital(hospital);

        if(retorno.length){
            console.log("O Hospital foi alterado no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async selecionaHospital(req, res){

        const hospitalModel = new HospitalModel();
        const retorno = await hospitalModel.selecionaHospital();

        if(retorno.length){
            res.status(200).send(retorno);
        }

        return retorno

    }

    async selecionaHospitalPorId(hospital){

        const hospitalModel = new HospitalModel();
        const retorno = await HospitalModel.selecionaHospitalPorId(hospital);

        if(retorno.length){
            console.log("O Hospital foi selecionado no banco pelo Id " + retorno);
        }

        return retorno

    }

    async selecionaHospitalPorNome(hospital){

        const hospitalModel = new HospitalModel();
        const retorno = await HospitalModel.selecionaHospitalPorNome(hospital);

        if(retorno.length){
            console.log("O Hospital foi selecionado no banco pelo Nome " + retorno);
        }

        return retorno

    }

    async selecionaHospitalPorHospital(hospital){

        const hospitalModel = new HospitalModel();
        const retorno = await HospitalModel.selecionaHospitalPorCargo(hospital);

        if(retorno.length){
            console.log("Os Hospitals foram selecionados no banco pelo Hospital  " + retorno);
        }

        return retorno

    }

    async deletaHospital(hospital){

        const hospitalModel = new HospitalModel();
        const retorno = await HospitalModel.deletaHospital(hospital);

        if(retorno.length){
            console.log("O Hospital foi deletado com sucesso com o Id " + retorno);
        }

        return retorno

    }
    
}

async function validaEntrada (dadosEntrada){
    
    try{

    const schema = Joi.object({
        nome: Joi.string().min(4).max(150).required(),
        telefone: Joi.string().required()

        }
    )

    const value = await schema.validateAsync(dadosEntrada);
    }catch(erro){

    throw new Error('Erro de validação')
}
}

module.exports = HospitalController