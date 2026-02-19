const PersonModel = require('../models/people');


class People{
    static async index(req){ 
        // retorna a lista de todas as informações
        let people = PersonModel.find({})
        return people
    }

    get(){ // pega apenas um regitro

    }

    create(){ // cria um registro (referente ao metodo POST)

    }
    update(){ // atualiza registros (referenciado pelo put/patch)

    }

    delete(){ // apaga/inativa um registro

    }
}
module.exports = People;