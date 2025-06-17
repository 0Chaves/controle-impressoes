'use server'
import Impressao from "@/models/impressao";
import connectDB from "./connectDB";
import xss from "xss";
import { revalidatePath } from "next/cache";

export async function getImpressoes(){
    await connectDB()
    let impressoes = await Impressao.find({}).lean()
    return impressoes.map(impressao=>({
        ...impressao, _id: impressao._id.toString()
    }))
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
    revalidatePath('/novaimpressao')
    revalidatePath('/dashboard')
}