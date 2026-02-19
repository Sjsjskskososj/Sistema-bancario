const mongoose = require('mongoose');

const SCHEMA_POSITION = mongoose.Schema({
    name: {
        type: String,
        minlength: [4, "O nome deve conter no mínimo 4 caracteres"],
        required: [true, "O nome é obrigatório"],
    },

    payment: {
        type: Number,
        required: [true, "O pagamento é obrigatório"],
    },
    rules:[{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'rules',
        required: [true, "As regras são obrigatórias"],
    }],
    people: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'people',
        }
    ]


})

module.exports = mongoose.model('positions', SCHEMA_POSITION, 'positions');