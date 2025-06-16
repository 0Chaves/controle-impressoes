'use client'
import HistoricoImpressoes from "@/components/historicoImpressoes"
import { escola, meses, tipo_folha } from "@/enums/enums"
import { FileText, Funnel, Printer } from "lucide-react"
import { useEffect, useState } from "react"

export default function Historico(){
    const anoAtual = new Date().toISOString().split("-")[0]

    const [impressoes, setImpressoes] = useState([])

    const [filtros, setFiltros] = useState({
        escola: '',
        tipo_folha: '',
        mes: '',
        ano: anoAtual
    })

    const buscar = async (e) =>{
        e.preventDefault()
        const query = new URLSearchParams(filtros).toString()
        const res = await fetch(`/api/impressao?${query}`)
        const data = await res.json()
        setImpressoes(data)
        console.log(data)
    }

    const limparFiltros = (e) =>{
        setFiltros({
            escola: '',
            tipo_folha: '',
            mes: '',
            ano: anoAtual
        })
    }

    const [paginasTotais, setPaginasTotais] = useState(0)

    useEffect(()=>{
        let paginas = 0
        impressoes.map(impressao=>{
            paginas += impressao.paginas
        })
        setPaginasTotais(paginas)
    }, [impressoes])

    return(
        <main className="flex flex-col items-center min-h-screen p-8 w-[1280px]">
            <div className="flex flex-col bg-white/80 border border-blue-200 rounded-md shadow-lg gap-4 p-6 w-full">
                <div className="mb-5 text-start">
                        <h2 className="text-2xl font-semibold text-blue-700">Histórico de Impressões</h2>
                        <p className="text-md text-gray-600">Visualize e filtre todas as impressões registradas</p>
                </div>
                <div className="bg-blue-100 border border-blue-200 p-2 rounded-lg">
                    <div className="flex gap-4">
                        <Funnel/>
                        <h3 className="text-2xl">Filtros</h3>
                    </div>
                    <form onSubmit={buscar} className="p-2 space-x-2 flex justify-around">
                        <div className="m-0">
                            <label className="font-medium">Escola</label>
                            <select value={filtros.escola} onChange={e => setFiltros({...filtros, escola: e.target.value})} className="bg-white rounded-md p-1 border w-full">
                                <option value="">Todas Escolas</option>
                                {escola.map(escola=> <option key={escola} value={escola}>{escola}</option> )}
                            </select>
                        </div>

                        <div className="m-0">
                            <label className="font-medium">Tipo de folha</label>    
                            <select value={filtros.tipo_folha} onChange={e => setFiltros({...filtros, tipo_folha: e.target.value})} className="bg-white rounded-md p-1 border w-full">
                                <option value="">Todos Tipos</option>
                                {tipo_folha.map(tipo=> <option key={tipo} value={tipo}>{tipo}</option> )}
                            </select>
                        </div>
                        <div className="m-0">
                            <label className="font-medium">Mes</label>
                            <select value={filtros.mes} onChange={e => setFiltros({...filtros, mes: e.target.value})} className="bg-white rounded-md p-1 border w-full">
                                <option value={""}>Todos os meses</option>
                                {meses.map(mes=> <option key={mes.value} value={mes.value}>{mes.label}</option> )}
                            </select>
                        </div>

                        <div className="m-0">
                            <label className="font-medium">Ano</label>
                            <input
                                type="number"
                                placeholder="Ano"
                                value={filtros.ano}
                                onChange={e => setFiltros({...filtros, ano: e.target.value})}
                                className="bg-white rounded-md p-1 border w-full"
                            />
                        </div>
                        <div className="flex items-baseline-last m-0">
                            <button className="bg-blue-600 border rounded-md text-white px-3 py-1 hover:bg-blue-800 hover:cursor-pointer w-full">Filtrar</button>
                        </div>
                        <div className="flex items-baseline-last m-0">
                            <button onClick={limparFiltros} className="bg-blue-600 border rounded-md text-white px-3 py-1 hover:bg-blue-800 hover:cursor-pointer w-full">Limpar Filtros</button>
                        </div>
                    </form>
                </div>
                <div className="flex space-x-4">
                    <div className="card_dashboard bg-gradient-to-r from-blue-500 to to-blue-700">
                        <div>
                            <Printer className="stroke-2"/>
                        </div>
                        <div className="flex flex-col text-start space-y-1">
                            <p className="font-bold text-2xl">{impressoes.length}</p>
                            <p>Total de impressões</p>
                        </div>
                    </div>
                    <div className="card_dashboard bg-gradient-to-r from-indigo-500 to to-indigo-700">
                        <div>
                            <FileText className="stroke-2"/>
                        </div>
                        <div className="flex flex-col text-start space-y-1">
                            <p className="font-bold text-2xl">{paginasTotais}</p>
                            <p>Total de páginas</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Lista de Impressões ({impressoes.length} registros)</h3>
                    <HistoricoImpressoes impressoes={impressoes}/>
                </div>
            </div>
        </main>
    )
}