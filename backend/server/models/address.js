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
})