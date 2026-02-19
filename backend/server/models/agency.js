const mongoose = require('mongoose');
const SCHEMA_AGENCY = mongoose.Schema({
    number: { 
        type: String,
        minlength: [4, "O número da agência deve conter no mínimo 4 caracteres"],
        required: [true, "O número da agência é obrigatório"],
    },
})