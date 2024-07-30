import { dbConn } from 'src/models/conexao.js';
import { Funcionario } from 'src/@types/funcionario';

export class FuncionarioModel {
	async insereFuncionario(funcionario: Funcionario) {
		const retorno = await dbConn('funcionario').insert({
			nome: funcionario.nome,
			telefone: funcionario.telefone,
			data_nascimento: funcionario.data_nascimento,
			sexo: funcionario.sexo,
		});
		return retorno;
	}

	async alteraFuncionario(Id: number, funcionario: Funcionario) {
		const retorno = await dbConn('funcionario')
			.update({ nome: funcionario.nome, telefone: funcionario.telefone, data_nascimento: funcionario.data_nascimento, sexo: funcionario.sexo })
			.where('Id', Id);
		return retorno;
	}

	async selecionaFuncionarios() {
		const retorno = await dbConn('funcionario').select();
		return retorno;
	}

	async selecionaFuncionarioPorId(Id: number) {
		const retorno = await dbConn('funcionario').select().where('Id', Id);
		return retorno;
	}

	async selecionaFuncionarioPorNome(nome: string) {
		const retorno = await dbConn('funcionario').select().where('nome', 'Like', `%${nome}%`);
		return retorno;
	}

	async selecionaFuncionarioPorCargo(Id: number) {
		const retorno = await dbConn('funcionario').select().where('cargo_Id', Id);
		return retorno;
	}

	async deletaFuncionario(Id: number) {
		const retorno = await dbConn('funcionario').del().where('Id', Id);
		return retorno;
	}
}
