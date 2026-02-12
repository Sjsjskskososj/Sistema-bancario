class Agencies{
    static index(req){ 
        // retorna a lista de todas as informações
        return [
            {
                nome: "Bradesco",
                numero: 237,
                endereco: "Rua do Bradesco, 123 - São Paulo - SP"
            },
        ];

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
module.exports = Agencies;