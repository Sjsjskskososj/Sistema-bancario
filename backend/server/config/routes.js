const People = require('../controllers/people');
const Agencies = require('../controllers/agency');
const Accounts = require('../controllers/accounts');
const Transactions = require('../controllers/transactions');

console.log("importando rotas")

class Routes{
    constructor (express){
        console.log("criando")
        // criacao das rotas get do diretorio home
        this.home_get(express)
        this.people_routes(express)
        this.agency_routes(express)
        this.accounts_routes(express)
        this.Transactions_routes(express)
    }
    


    home_get(express){
        express.get("/", (req, res) =>{
            return res.send("Jujutsu Kaisen");
        });
    }


    people_routes(express){
        express.get("/people/", (req,res)=> { 
            res.send(JSON.stringify(People.index(req)))
       })
    }

    agency_routes(express){
        express.get("/agencies/", (req,res)=> { 
            res.send(JSON.stringify(Agencies.index(req)))
       })

    }
    accounts_routes(express){
        express.get("/acounts/", (req,res)=> { 
            res.send(JSON.stringify(Accounts.index(req)))
       })
    }   
    Transactions_routes(express){
        express.get("/transactions/", (req,res)=> { 
            res.send(JSON.stringify(Transactions.index(req)))
       })
    }
}
module.exports = Routes