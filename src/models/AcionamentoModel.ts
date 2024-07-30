import { CargoModel } from './CargoModel.js';
import { dbConn } from '../models/conexao.js';
import { Acionamento } from '../@types/acionamento.js';

export class AcionamentoModel {
	async insereAcionamento(acionamento: Acionamento): Promise<number[]> {
		const retorno: number[] = await dbConn('acionamento').insert({ data_hora: acionamento.data_hora, vaga_confirmada: acionamento.vaga_comfirmada });
		return retorno;
	}

	async alteraAcionamento(Id: number, acionamento: Acionamento): Promise<number> {
		const retorno: number = await dbConn('acionamento')
			.update({ data_hora: acionamento.data_hora, vaga_confirmada: acionamento.vaga_comfirmada })
			.where('Id', Id);
		return retorno;
	}

	async selecionaAcionamentos(acionamento: Acionamento): Promise<Acionamento[]> {
		const retorno: Acionamento[] = await dbConn('acionamento').select();
		return retorno;
	}

	async selecionaAcionamentoPorId(Id: number): Promise<Acionamento[]> {
		const retorno: Acionamento[] = await dbConn('acionamento').select().where('Id', Id);
		return retorno;
	}

	async selecionaAcionamentoPorNome(nome: string): Promise<Acionamento[]> {
		const retorno: Acionamento[] = await dbConn('acionamento').select().where('nome', 'Like', `%${nome}%`);
		return retorno;
	}

	async selecionaAcionamentoPorCargo(Id: number): Promise<Acionamento[]> {
		const retorno: Acionamento[] = await dbConn('acionamento').select().where('cargo_Id', Id);
		return retorno;
	}

	async deletaAcionamento(Id: number): Promise<number> {
		const retorno: number = await dbConn('acionamento').del().where('Id', Id);
		return retorno;
	}
}
