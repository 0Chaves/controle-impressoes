import { escola } from "@/enums/enums"

export default function HistoricoImpressoes({impressoes}){

    const imp = impressoes

    return(
        <div className="p-4 pt-0">
            <table className="w-full text-sm">
                <thead className="border-b border-gray-400">
                    <tr className="hover:bg-gray-100 transition-colors text-gray-600">
                        <th className="text-left px-4 align-middle h-12 font-medium">ID</th>
                        <th className="text-left px-4 align-middle h-12 font-medium">Escola</th>
                        <th className="text-left px-4 align-middle h-12 font-medium">Tipo de folha</th>
                        <th className="text-left px-4 align-middle h-12 font-medium">Páginas</th>
                        <th className="text-left px-4 align-middle h-12 font-medium">Data</th>
                    </tr>
                </thead>
                <tbody>
                    {imp.map((impressao, i)=>(
                        <tr key={impressao._id} className="hover:bg-gray-100 transition-colors border-b border-gray-400">
                            <td className="text-left px-4 align-middle h-8 font-mono">{i+1}</td>
                            <td className="font-mono"><div className={impressao.escola == escola[0] ? "escola0" : impressao.escola == escola[1] ? "escola1" : "escola2"}>{impressao.escola}</div></td>
                            <td className="text-left px-4 align-middle h-8 font-mono">{impressao.tipo_folha}</td>
                            <td className="text-left px-4 align-middle h-8 font-semibold font-mono">{impressao.paginas}</td>
                            <td className="text-left px-4 align-middle h-8 font-mono">{impressao.data.split('-')[2].split('T')[0]}/{impressao.data.split('-')[1]}/{impressao.data.split('-')[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}