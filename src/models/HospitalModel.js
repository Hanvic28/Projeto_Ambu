const knex = require('./conexao.js')

class HospitalModel{

    async insereHospital(hospital){

        try{
            
            const retorno = await knex('hospital').insert(hospital);
            return retorno

        }catch(err){
            throw new Error(err.message)
        }

    };
  
    async alteraHospital(Id, hospital){
        const retorno = await knex('hospital').update({nome: nome.hospital, nome_contato: nome_contato.hospital, telefone: telefone.hospital}).where('Id', Id);
        return retorno
    };
  
    async selecionaHospital(){
        const retorno = await knex('hospital').select();
        return retorno
    };
  
    async selecionaHospitalPorId(Id){
        const retorno = await knex('hospital').select().where('Id', Id);
        return retorno
    };
  
    async selecionaHospitalPorNome(nome){
        const retorno = await knex('hospital').select().where('nome','Like', `%${nome}%`);
        return retorno
    };
  
    async selecionaHospitalPorCargo(Id){
        const retorno = await knex('hospital').select().where('cargo_Id', Id);
        return retorno
    };
  
    async deletaHospital(Id){
        const retorno = await knex('hospital').del().where('Id', Id);
        return retorno
    };
  }

  module.exports = HospitalModel;