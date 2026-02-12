class People{
    static index(req){ 
        // retorna a lista de todas as informações
        return [
            {
                nome: "Jean Clebs",
                idade: 67,
                profissao:"Gogo boy"
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
module.exports = People;