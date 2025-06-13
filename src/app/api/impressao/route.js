import connectDB from "@/lib/connectDB"
import Impressao from "@/models/impressao"


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