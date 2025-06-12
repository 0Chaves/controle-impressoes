import { getImpressoes } from "./impressaoDB"

    
const impressoes = await getImpressoes()
const hoje = new Date().toISOString().split('T')[0]

export function impressoesHoje () {
    let impressoes_hoje = 0
    impressoes.map(impressao=>{
    if(impressao.data.toISOString().split('T')[0] == hoje){
        impressoes_hoje += 1
    }
    })
    return impressoes_hoje
}

export function impressoesMes (){
    let impressoes_mes = 0
    impressoes.map(impressao=>{
    if(impressao.data.toISOString().split('-')[1] == hoje.split('-')[1]){
        impressoes_mes += 1
    }
    })
    return impressoes_mes
}

export function impressoesTotal (){
    let impressoes_total = 0
    impressoes_total = impressoes.length
    return impressoes_total
}

export function paginasHoje () {
    let paginas_hoje = 0
    impressoes.map(impressao=>{
    if(impressao.data.toISOString().split('T')[0] == hoje){
        paginas_hoje += impressao.paginas 
    }
    })
    return paginas_hoje
}

export function paginasMes () {
    let paginas_mes = 0
    impressoes.map(impressao=>{
    if(impressao.data.toISOString().split('-')[1] == hoje.split('-')[1]){
        paginas_mes += impressao.paginas
    }
    })
    return paginas_mes
}

export function paginasTotal () {
    let paginas_total = 0
    impressoes.map(impressao=>{
    paginas_total += impressao.paginas
    })
    return paginas_total
}