const mongoose = require('mongoose');

const SCHEMA_PERSON= mongoose.Schema({
    name: {
        type: String,
        minlength: [4, "O nome deve conter no mínimo 4 caracteres"],
        required: [true, "O nome é obrigatório"],
    },
    cpf: {
        type: String,
        minlength: [11, "O CPF deve conter 11 caracteres"],
        maxlength: [11, "O CPF deve conter 11 caracteres"],
        required: [true, "O CPF é obrigatório"],
    },
    birthDate: {
        type: Date,
        required: [true, "A data de nascimento é obrigatória"],
    },
    phone: {
        type: String,
        minlength: [10, "O telefone deve conter no mínimo 10 caracteres"],
        maxlength: [11, "O telefone deve conter no máximo 11 caracteres"],
        required: [true, "O telefone é obrigatório"],
    },
    email: {
        type: String,
        minlength: [4, "O email deve conter no mínimo 4 caracteres"],
        required: [true, "O email é obrigatório"],
    },
    password: {
        type: String,
        minlength: [8, "A senha deve conter no mínimo 8 caracteres"],
        required: [true, "A senha é obrigatória"],
        select: false,
    },

    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'addresses',
        required: [true, "O endereço é obrigatório"],
    },
    position: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'positions',
        required: [true, "A posição é obrigatória"],
    },
    accounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'accounts',
    }],
})

module.exports = mongoose.model('people', SCHEMA_PERSON);