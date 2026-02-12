class Accounts{
    static index(req){ 
        // retorna a lista de todas as informações
        return [
            {
                numero: "12345-6",
                agencia: "237",
                titular: "Jean Clebs",
                saldo: 1000.00
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
module.exports = Accounts;