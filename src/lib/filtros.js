import { getImpressoes } from "./impressaoDB"
import { escola } from "@/enums/enums"

//TODO: PADRONIZAR AS FUNÇÕES POIS SÃO REPETITIVAS

const arrayImpressoes = await getImpressoes()
const hoje = new Date().toISOString().split('T')[0]

export function impressoesHoje () {
    let impressoes_hoje = 0
    arrayImpressoes.map(impressao=>{
    if(impressao.data.toISOString().split('T')[0] == hoje){
        impressoes_hoje += 1
    }
    })
    return impressoes_hoje
}

export function impressoesMes (){
    let impressoes_mes = 0
    arrayImpressoes.map(impressao=>{
    if(impressao.data.toISOString().split('-')[1] == hoje.split('-')[1]){
        impressoes_mes += 1
    }
    })
    return impressoes_mes
}

export function impressoesTotal (){
    let impressoes_total = 0
    impressoes_total = arrayImpressoes.length
    return impressoes_total
}

export function paginasHoje () {
    let paginas_hoje = 0
    arrayImpressoes.map(impressao=>{
    if(impressao.data.toISOString().split('T')[0] == hoje){
        paginas_hoje += impressao.paginas 
    }
    })
    return paginas_hoje
}

export function paginasMes () {
    let paginas_mes = 0
    arrayImpressoes.map(impressao=>{
    if(impressao.data.toISOString().split('-')[1] == hoje.split('-')[1]){
        paginas_mes += impressao.paginas
    }
    })
    return paginas_mes
}

export function paginasTotal () {
    let paginas_total = 0
    arrayImpressoes.map(impressao=>{
    paginas_total += impressao.paginas
    })
    return paginas_total
}

export function impressoes_escola(escola){
    let impressoes = 0
    arrayImpressoes.map(impressao=>{
        if(impressao.escola == escola){
            impressoes += 1
        }
    })
    return impressoes
}

export function paginas_escola(escola){
    let paginas = 0
    arrayImpressoes.map(impressao=>{
        if(impressao.escola == escola){
            paginas += impressao.paginas
        }
    })
    return paginas
}

