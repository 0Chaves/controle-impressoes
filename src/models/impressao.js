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
    }
})

const Impressao = mongoose.models.Impressao || mongoose.model("Impressao", impressaoSchema)
export default Impressao