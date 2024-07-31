import { dbConn } from 'src/models/conexao.js';
import { Cargo } from 'src/@types/cargo';

export class CargoModel {
	//Insere um novo cargo no banco de dados a partir de um objeto cargo
	async insereCargo(cargo: Cargo):Promise<number[]> {
		const retorno: number[] = await dbConn('cargo').insert({ nome_cargo: cargo.nome_cargo });
		return retorno;
	}

	async alteraCargo(Id: number, cargo: Cargo):Promise<number> {
		const retorno: number = await dbConn('cargo').update({ nome_cargo: cargo.nome_cargo }).where('Id', Id);
		return retorno;
	}

	async selecionaCargos():Promise<Cargo[]> {
		const retorno: Cargo[] = await dbConn('cargo').select();
		return retorno;
	}

	async selecionaCargoPorId(Id: number):Promise<Cargo[]> {
		const retorno: Cargo[] = await dbConn('cargo').select().where('Id', Id);
		return retorno;
	}

	async selecionaCargoPorNome(nome: string):Promise<Cargo[]> {
		const retorno: Cargo[] = await dbConn('cargo').select().where('nome', 'Like', `%${nome}%`);
		return retorno;
	}

	async selecionaCargoPorCargo(Id: number):Promise<Cargo[]> {
		const retorno: Cargo[] = await dbConn('cargo').select().where('cargo_Id', Id);
		return retorno;
	}

	async deletaCargo(Id: number):Promise<number> {
		const retorno: number = await dbConn('cargo').del().where('Id', Id);
		return retorno;
	}
}
