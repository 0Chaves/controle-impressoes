const hoje = new Date().toISOString().split('T')[0]

export async function impressoesHoje (arrayImpressoes) {
    return arrayImpressoes.filter(impressao=>impressao.data.toISOString().split('T')[0] == hoje).length
}

export async function impressoesMes (arrayImpressoes){
    return arrayImpressoes.map(impressao=>impressao.data.toISOString().split('-')[1] == hoje.split('-')[1]).length
}

export async function impressoesTotal (arrayImpressoes){
    return arrayImpressoes.length 
}

export async function paginasHoje (arrayImpressoes) {
    let paginas_hoje = 0
    arrayImpressoes.map(impressao=>{
    if(impressao.data.toISOString().split('T')[0] == hoje){
        paginas_hoje += impressao.paginas 
    }
    })
    return paginas_hoje
}

export async function paginasMes (arrayImpressoes) {
    let paginas_mes = 0
    arrayImpressoes.map(impressao=>{
    if(impressao.data.toISOString().split('-')[1] == hoje.split('-')[1]){
        paginas_mes += impressao.paginas
    }
    })
    return paginas_mes
}

export async function paginasTotal (arrayImpressoes) {
    let paginas_total = 0
    arrayImpressoes.map(impressao=>{
    paginas_total += impressao.paginas
    })
    return paginas_total
}

export async function impressoes_escola(arrayImpressoes, escola){
    return arrayImpressoes.filter(impressao=>impressao.escola == escola).length
}

export async function paginas_escola(arrayImpressoes, escola){
    let paginas = 0
    arrayImpressoes.map(impressao=>{
        if(impressao.escola == escola){
            paginas += impressao.paginas
        }
    })
    return paginas
}

