import { dbConn } from 'src/models/conexao.js';
import { Hospital } from 'src/@types/hospital';

export class HospitalModel {
	async insereHospital(hospital: Hospital): Promise<number> {
		try {
			const retorno: number = await dbConn('hospital').insert(hospital);
			return retorno;
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async alteraHospital(Id: number, hospital: Hospital): Promise<number> {
		const retorno: number = await dbConn('hospital')
			.update({ nome: hospital.nome, nome_contato: hospital.nome_contato, telefone: hospital.telefone })
			.where('Id', Id);
		return retorno;
	}

	async selecionaHospital(): Promise<Hospital[]> {
		const retorno: Hospital[] = await dbConn('hospital').select();
		return retorno;
	}

	async selecionaHospitalPorId(Id: number): Promise<Hospital[]> {
		const retorno: Hospital[] = await dbConn('hospital').select().where('Id', Id);
		return retorno;
	}

	async selecionaHospitalPorNome(nome: string): Promise<Hospital[]> {
		const retorno: Hospital[] = await dbConn('hospital').select().where('nome', 'Like', `%${nome}%`);
		return retorno;
	}

	async selecionaHospitalPorCargo(Id: number): Promise<Hospital[]> {
		const retorno: Hospital[] = await dbConn('hospital').select().where('cargo_Id', Id);
		return retorno;
	}

	async deletaHospital(Id: number): Promise<number> {
		const retorno: number = await dbConn('hospital').del().where('Id', Id);
		return retorno;
	}
}
