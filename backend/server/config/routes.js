const People = require('../controllers/people')

class Routes{
    constructor (express){
        // criacao das rotas get do diretorio home
        this.home_get(express)
        this.people_routes(express)
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
}

module.exports = Routes