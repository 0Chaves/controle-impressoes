import { escola, tipo_folha } from "@/enums/enums";
import mongoose from "mongoose";

const impressaoSchema = new mongoose.Schema({
    escola: {
        type: String,
        enum: escola,
        required: true,
    },
    tipo_folha: {
        type: String,
        enum: tipo_folha,
        required: true
    },
    paginas:{
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: "O valor deve ser inteiro"
        },
        min: 1
    },
    data: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
            return value <= new Date().toISOString().split('T')[0]; // impede datas futuras
            },
            message: "A data não pode estar no futuro"
        }

    }
})

const Impressao = mongoose.models.Impressao || mongoose.model("Impressao", impressaoSchema)
export default Impressao