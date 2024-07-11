const knex = require('./conexao.js')

class CargoModel{

    //Insere um novo cargo no banco de dados a partir de um objeto cargo
    async insereCargo(cargo){
        const retorno = await knex('cargo').insert({nome_cargo: cargo.nome_cargo});
        return retorno
    };
  
    async alteraCargo(Id, cargo){
        const retorno = await knex('cargo').update({nome_cargo: cargo.nome_cargo}).where('Id', Id);
        return retorno
    };
  
    async selecionaCargos(){
        const retorno = await knex('cargo').select();
        return retorno
    };
  
    async selecionaCargoPorId(Id){
        const retorno = await knex('cargo').select().where('Id', Id);
        return retorno
    };
  
    async selecionaCargoPorNome(nome){
        const retorno = await knex('cargo').select().where('nome','Like', `%${nome}%`);
        return retorno
    };
  
    async selecionaCargoPorCargo(Id){
        const retorno = await knex('cargo').select().where('cargo_Id', Id);
        return retorno
    };
  
    async deletaCargo(Id){
        const retorno = await knex('cargo').del().where('Id', Id);
        return retorno
    };
  }

  module.exports = CargoModel;