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

export async function GET(req) {
    await connectDB()
    const { searchParams } = new URL(req.url)
    const escola = searchParams.get("escola")
    const mes = searchParams.get("mes")
    const ano = searchParams.get("ano")
    const tipo_folha = searchParams.get("tipo_folha")

    const filtro = {}
    if (escola) filtro.escola = escola
    if (tipo_folha) filtro.tipo_folha = tipo_folha
    if (ano && !mes){
        const inicioAno = new Date(ano, 0, 1)
        const fimAno = new Date(ano, 12, 31)
        filtro.data = { $gte: inicioAno, $lt: fimAno }
    } else if (ano && mes) {
        const inicioMes = new Date(ano, mes, 1)
        const fimMes = new Date(ano, mes + 1, 1)
        filtro.data = { $gte: inicioMes, $lt: fimMes }
    }

    const impressoes = await Impressao.find(filtro).lean();
    const impressoesConvertidas = impressoes.map((imp) => ({
        ...imp,
        _id: imp._id.toString(),
    }));

    return Response.json(impressoesConvertidas)
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
}

export async function deletarImpressao(id){
    await connectDB()
    await Impressao.findByIdAndDelete(id)
    revalidatePath('/historico')
}