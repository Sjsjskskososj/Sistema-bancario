const mongoose = require('mongoose');

const SCHEMA_ACCOUNT = mongoose.Schema({
    Number: {
        type: String,
        minlength: [4, "O número deve conter no mínimo 4 caracteres"],
        required: [true, "O número da conta é obrigatório"],
    },
    balance: {
        type: Number,
        required: [true, "O saldo é obrigatório"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})