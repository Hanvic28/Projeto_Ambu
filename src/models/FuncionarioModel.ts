import { dbConn } from '../models/conexao.js';
import { Funcionario } from '../@types/funcionario.js';

export class FuncionarioModel {
	async insereFuncionario(funcionario: Funcionario): Promise<number[]> {
		const retorno: number[] = await dbConn('funcionario').insert({
			nome: funcionario.nome,
			telefone: funcionario.telefone,
			data_nascimento: funcionario.data_nascimento,
			sexo: funcionario.sexo,
		});
		return retorno;
	}

	async alteraFuncionario(Id: number, funcionario: Funcionario): Promise<number> {
		const retorno: number = await dbConn('funcionario')
			.update({ nome: funcionario.nome, telefone: funcionario.telefone, data_nascimento: funcionario.data_nascimento, sexo: funcionario.sexo })
			.where('Id', Id);
		return retorno;
	}

	async selecionaFuncionarios():Promise<Funcionario[]> {
		const retorno: Funcionario[] = await dbConn('funcionario').select();
		return retorno;
	}

	async selecionaFuncionarioPorId(Id: number):Promise<Funcionario[]> {
		const retorno: Funcionario[] = await dbConn('funcionario').select().where('Id', Id);
		return retorno;
	}

	async selecionaFuncionarioPorNome(nome: string):Promise<Funcionario[]> {
		const retorno: Funcionario[] = await dbConn('funcionario').select().where('nome', 'Like', `%${nome}%`);
		return retorno;
	}

	async selecionaFuncionarioPorCargo(Id: number):Promise<Funcionario[]> {
		const retorno: Funcionario[] = await dbConn('funcionario').select().where('cargo_Id', Id);
		return retorno;
	}

	async deletaFuncionario(Id: number):Promise<number> {
		const retorno: number = await dbConn('funcionario').del().where('Id', Id);
		return retorno;
	}
}
