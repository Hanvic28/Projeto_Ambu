const { selecionaCargo } = require('./CargoModel.js');
const knex = require('./conexao.js')

class AcionamentoModel{

  async insereAcionamento(acionamento){
      const retorno = await knex('acionamento').insert({data_hora: data_hora.acionamento, vaga_confirmada: vaga_confirmada.acionamento});
      return retorno
  };

  async alteraAcionamento(Id, acionamento){
      const retorno = await knex('acionamento').update({data_hora: data_hora.acionamento, vaga_confirmada: vaga_confirmada.acionamento}).where('Id', Id);
      return retorno
  };

  async selecionaAcionamentos(){
      const retorno = await knex('acionamento').select();
      return retorno
  };

  async selecionaAcionamentoPorId(Id){
      const retorno = await knex('acionamento').select().where('Id', Id);
      return retorno
  };

  async selecionaAcionamentoPorNome(nome){
      const retorno = await knex('acionamento').select().where('nome','Like', `%${nome}%`);
      return retorno
  };

  async selecionaAcionamentoPorCargo(Id){
      const retorno = await knex('acionamento').select().where('cargo_Id', Id);
      return retorno
  };

  async deletaAcionamento(Id){
      const retorno = await knex('acionamento').del().where('Id', Id);
      return retorno
  };
}

module.exports = AcionamentoModel;
