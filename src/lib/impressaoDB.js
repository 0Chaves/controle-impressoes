'use server'
import Impressao from "@/models/impressao";
import connectDB from "./connectDB";
import xss from "xss";
import { revalidatePath } from "next/cache";

export async function getImpressoes(){
    await connectDB()
    return Impressao.find({})
}

export async function salvarImpressao(impressao){
    await connectDB()
    const {escola, tipo_folha, paginas, data} = impressao
    const novaImpressao = new Impressao({
        escola: xss(escola),
        tipo_folha: xss(tipo_folha),
        paginas: paginas,
        data: data
    })
    await novaImpressao.save()
}

export async function deletarImpressao(id){
    await connectDB()
    await Impressao.findByIdAndDelete(id)
    revalidatePath('/historico')
}