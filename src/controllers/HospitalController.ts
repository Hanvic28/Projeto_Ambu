import { HospitalModel } from '../models/HospitalModel.js';
import { Hospital } from 'src/@types/hospital';
import Joi from 'joi';
import { Request, Response } from 'express';

export class HospitalController{

    async insereHospital(req: Request, res: Response){

            await validaEntrada(req.body);

            if(req.body.nome == 'Alexandre'){
                throw new Error("Não existe")
            };

        const hospitalModel = new HospitalModel();
        const retorno = await hospitalModel.insereHospital(req.body);

        res.status(201).send("Objeto Inserido " + retorno)

    }

    async alteraHospital(Id: number, hospital: Hospital){

        const hospitalModel = new HospitalModel();
        const retorno = await hospitalModel.alteraHospital(Id, hospital);

        if(retorno.length){
            console.log("O Hospital foi alterado no banco corretamente com o Id " + retorno);
        }

        return retorno

    }

    async selecionaHospital(req: Request, res: Response){

        const hospitalModel = new HospitalModel();
        const retorno = await hospitalModel.selecionaHospital();

        if(retorno.length){
            res.status(200).send(retorno);
        }

        return retorno

    }

    async selecionaHospitalPorId(hospital: number){

        const hospitalModel = new HospitalModel();
        const retorno = await hospitalModel.selecionaHospitalPorId(hospital);

        if(retorno.length){
            console.log("O Hospital foi selecionado no banco pelo Id " + retorno);
        }

        return retorno

    }

    async selecionaHospitalPorNome(hospital: string){

        const hospitalModel = new HospitalModel();
        const retorno = await hospitalModel.selecionaHospitalPorNome(hospital);

        if(retorno.length){
            console.log("O Hospital foi selecionado no banco pelo Nome " + retorno);
        }

        return retorno

    }

    async selecionaHospitalPorHospital(hospital: number){

        const hospitalModel = new HospitalModel();
        const retorno = await hospitalModel.selecionaHospitalPorCargo(hospital);

        if(retorno.length){
            console.log("Os Hospitals foram selecionados no banco pelo Hospital  " + retorno);
        }

        return retorno

    }

    async deletaHospital(hospital: number){

        const hospitalModel = new HospitalModel();
        const retorno = await hospitalModel.deletaHospital(hospital);

        if(retorno.length){
            console.log("O Hospital foi deletado com sucesso com o Id " + retorno);
        }

        return retorno

    }
    
}

async function validaEntrada (dadosEntrada: number){
    
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