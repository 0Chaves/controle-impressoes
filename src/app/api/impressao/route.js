import connectDB from "@/lib/connectDB"
import Impressao from "@/models/impressao"


export async function GET(req) {
    await connectDB()
    const { searchParams } = new URL(req.url)
    const escola = searchParams.get("escola")
    const tipo_folha = searchParams.get("tipo_folha")
    const mes = searchParams.get("mes")
    const mes_numero = mes ? (parseInt(mes) - 1) : -1
    const ano = parseInt(searchParams.get("ano")) || null


    const filtro = {}
    if (escola) filtro.escola = escola
    if (tipo_folha) filtro.tipo_folha = tipo_folha
    if (ano && mes_numero == -1){
        const inicioAno = new Date(ano, 0, 0)
        const fimAno = new Date(ano, 11, 30)
        filtro.data = { $gte: inicioAno, $lt: fimAno }
    } else if (ano && mes_numero >= 0) {
        const inicioMes = new Date(ano, mes_numero, 0)
        const fimMes = new Date(ano, mes_numero + 1, 0)
        filtro.data = { $gte: inicioMes, $lt: fimMes }
    }

    const impressoes = await Impressao.find(filtro).lean();
    const impressoesConvertidas = impressoes.map((imp) => ({
        ...imp,
        _id: imp._id.toString(),
    }));

    return Response.json(impressoesConvertidas)
}