import { HospitalModel } from '../models/HospitalModel.js';
import { Hospital } from '../@types/hospital.js';
import Joi from 'joi';
import { Request, Response } from 'express';

export class HospitalController {
	async insereHospital(req: Request, res: Response): Promise<any> {
		await validaEntrada(req.body);

		if (req.body.nome == 'Alexandre') {
			throw new Error('Não existe');
		}

		const hospitalModel = new HospitalModel();
		const retorno: number = await hospitalModel.insereHospital(req.body);

		res.status(201).send('Objeto Inserido ' + retorno);
	}

	async alteraHospital(Id: number, hospital: Hospital): Promise<number> {
		const hospitalModel = new HospitalModel();
		const retorno: number = await hospitalModel.alteraHospital(Id, hospital);

		if (retorno > 0) {
			console.log('O Hospital foi alterado no banco corretamente com o Id ' + retorno);
		}

		return retorno;
	}

	async selecionaHospital(req: Request, res: Response): Promise<Hospital[]> {
		const hospitalModel = new HospitalModel();
		const retorno: Hospital[] = await hospitalModel.selecionaHospital();

		if (retorno.length) {
			res.status(200).send(retorno);
		}

		return retorno;
	}

	async selecionaHospitalPorId(hospital: number): Promise<Hospital[]> {
		const hospitalModel = new HospitalModel();
		const retorno: Hospital[] = await hospitalModel.selecionaHospitalPorId(hospital);

		if (retorno.length) {
			console.log('O Hospital foi selecionado no banco pelo Id ' + retorno);
		}

		return retorno;
	}

	async selecionaHospitalPorNome(hospital: string): Promise<Hospital[]> {
		const hospitalModel = new HospitalModel();
		const retorno: Hospital[] = await hospitalModel.selecionaHospitalPorNome(hospital);

		if (retorno.length) {
			console.log('O Hospital foi selecionado no banco pelo Nome ' + retorno);
		}

		return retorno;
	}

	async selecionaHospitalPorHospital(hospital: number): Promise<Hospital[]> {
		const hospitalModel = new HospitalModel();
		const retorno: Hospital[] = await hospitalModel.selecionaHospitalPorCargo(hospital);

		if (retorno.length) {
			console.log('Os Hospitals foram selecionados no banco pelo Hospital  ' + retorno);
		}

		return retorno;
	}

	async deletaHospital(hospital: number): Promise<number> {
		const hospitalModel: HospitalModel = new HospitalModel();
		const retorno: number = await hospitalModel.deletaHospital(hospital);

		if (retorno > 0) {
			console.log('O Hospital foi deletado com sucesso com o Id ' + retorno);
		}

		return retorno;
	}
}

async function validaEntrada(dadosEntrada: number): Promise<any> {
	try {
		const schema = Joi.object({
			nome: Joi.string().min(4).max(150).required(),
			telefone: Joi.string().required(),
		});

		const value: any = await schema.validateAsync(dadosEntrada);
	} catch (erro) {
		throw new Error('Erro de validação');
	}
}
