
export default function HistoricoImpressoes({impressoes}){

    const imp = impressoes

    return(
        <div>
            {imp.map(impressao=>(
                <div>
                    {impressao.escola} fez uma impressao de {impressao.paginas} em {impressao.tipo_folha} no dia {impressao.data.split('T')[0]}
                </div>
            ))}
        </div>
    )
}