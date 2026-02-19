const mongoose = require('mongoose');
const SCHEMA_AGENCY = mongoose.Schema({
    number: { 
        type: String,
        minlength: [4, "O número da agência deve conter no mínimo 4 caracteres"],
        required: [true, "O número da agência é obrigatório"],
    },
    accounts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'accounts',
    }],
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'addresses',
        required: [true, "O endereço é obrigatório"],
    },
})

module.exports = mongoose.model('agencies', SCHEMA_AGENCY);