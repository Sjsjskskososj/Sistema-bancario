const mongoose = require('mongoose');

const SCHEMA_RULE = mongoose.Schema({
    name: {
        type: String,
        minlength: [4, "O nome deve conter no mínimo 4 caracteres"],
        required: [true, "O nome da regra é obrigatório"],
    },

    description: {
        type: String,
        minlength: [10, "A descrição deve conter no mínimo 10 caracteres"],
        required: [true, "A descrição da regra é obrigatória"],
    },
    positions: [{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'positions',
        required: [true, "As posições são obrigatórias"],
    }],
})

module.exports = mongoose.model('rules', SCHEMA_RULE, 'rules');