const mongoose = require('mongoose');

const SCHEMA_ADDRESS = mongoose.Schema({
    street: {
        type: String,
        minlength: [4, "A rua deve conter no mínimo 4 caracteres"],
        required: [true, "A rua é obrigatória"],
    },
    city: {
        type: String,
        minlength: [4, "A cidade deve conter no mínimo 4 caracteres"],
        required: [true, "A cidade é obrigatória"],
    },
    UF: {
        type: String,
        maxlength: [2, "A UF deve conter no máximo 2 caracteres"],
        required: [true, "A UF é obrigatória"],
    },  
    compliment: {
        type: String,
        maxlength: [100, "O complemento deve conter no máximo 100 caracteres"],
    },
    CEP: {
        type:String,
        minlength: [8, "O CEP deve conter 8 caracteres"],
        maxlength: [8, "O CEP deve conter 8 caracteres"],
        required: [true, "O CEP é obrigatório"],
    },
    district: {
        type: String,
        minlength: [4, "O bairro deve conter no mínimo 4 caracteres"],
        required: [true, "O bairro é obrigatório"],
    },
    number: {
        type: String,
        minlength: [1, "O número deve conter no mínimo 1 caracteres"],
        required: [true, "O número é obrigatório"],
    },
    people: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'people', 
    }],
    agencies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'agencies', 
    }],
})

module.exports = mongoose.model('addresses', SCHEMA_ADDRESS);