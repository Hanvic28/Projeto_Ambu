import { CargoModel } from './CargoModel.js';
import knex from 'knex';
import { Acionamento } from '../@types/acionamento.js';

export class AcionamentoModel{

  async insereAcionamento(acionamento: Acionamento){
      const retorno = await knex('acionamento').insert({data_hora: acionamento.data_hora, vaga_confirmada: acionamento.vaga_comfirmada});
      return retorno
  };

  async alteraAcionamento(Id: number, acionamento: Acionamento){
      const retorno = await knex('acionamento').update({data_hora: acionamento.data_hora, vaga_confirmada: acionamento.vaga_comfirmada}).where('Id', Id);
      return retorno
  };

  async selecionaAcionamentos(acionamento: Acionamento){
      const retorno = await knex('acionamento').select();
      return retorno
  };

  async selecionaAcionamentoPorId(Id: number){
      const retorno = await knex('acionamento').select().where('Id', Id);
      return retorno
  };

  async selecionaAcionamentoPorNome(nome: string){
      const retorno = await knex('acionamento').select().where('nome','Like', `%${nome}%`);
      return retorno
  };

  async selecionaAcionamentoPorCargo(Id: number){
      const retorno = await knex('acionamento').select().where('cargo_Id', Id);
      return retorno
  };

  async deletaAcionamento(Id: number){
      const retorno = await knex('acionamento').del().where('Id', Id);
      return retorno
  };
}