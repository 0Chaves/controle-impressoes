
export default function HistoricoImpressoes({impressoes}){

    const imp = impressoes

    return(
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Escola</th>
                    <th>Data</th>
                    <th>Tipo de folha</th>
                    <th>Páginas</th>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
            {imp.map(impressao=>(
                <div>
                    {impressao.escola} fez uma impressao de {impressao.paginas} em {impressao.tipo_folha} no dia {impressao.data.split('T')[0]}
                </div>
            ))}
        </div>
    )
}