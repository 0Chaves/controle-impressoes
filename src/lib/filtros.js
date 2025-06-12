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

export function impressoes_capivari(){
    let impressoes = 0
    arrayImpressoes.map(impressao=>{
        if(impressao.escola == escola[1]){
            impressoes += 1
        }
    })
    return impressoes
}

export function impressoes_telbio(){
    let impressoes = 0
    arrayImpressoes.map(impressao=>{
        if(impressao.escola == escola[2]){
            impressoes += 1
        }
    })
    return impressoes
}
export function impressoes_mundoencantado(){
    let impressoes = 0
    arrayImpressoes.map(impressao=>{
        if(impressao.escola == escola[0]){
            impressoes += 1
        }
    })
    return impressoes
}

export function paginas_capivari(){
    let paginas = 0
    arrayImpressoes.map(impressao=>{
        if(impressao.escola == escola[1]){
            paginas += impressao.paginas
        }
    })
    return paginas
}

export function paginas_telbio(){
    let paginas = 0
    arrayImpressoes.map(impressao=>{
        if(impressao.escola == escola[2]){
            paginas += impressao.paginas
        }
    })
    return paginas
}

export function paginas_mundoencantado(){
    let paginas = 0
    arrayImpressoes.map(impressao=>{
        if(impressao.escola == escola[0]){
            paginas += impressao.paginas
        }
    })
    return paginas
}