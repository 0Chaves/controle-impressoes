'use client'
import HistoricoImpressoes from "@/components/historicoImpressoes"
import { escola, meses, tipo_folha } from "@/enums/enums"
import { Funnel } from "lucide-react"
import { useState } from "react"

export default function Historico(){

    const [impressoes, setImpressoes] = useState([])

    const [filtros, setFiltros] = useState({
        escola: '',
        tipo_folha: '',
        mes: '',
        ano: ''
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
        e.preventDefault()
        setFiltros({
            escola: '',
            tipo_folha: '',
            mes: '',
            ano: ''
        })
    }

    return(
        <main className="flex flex-col items-center min-h-screen p-8 w-[1280px]">
            <div className="flex flex-col bg-white rounded-md shadow-md gap-4 p-6 w-full">
                <div className="mb-5 text-start">
                        <h2 className="text-2xl font-semibold text-blue-500">Histórico de Impressões</h2>
                        <p className="text-md text-gray-600">Visualize e filtre todas as impressões registradas</p>
                </div>
                <div className="bg-blue-100 border border-blue-200">
                    <div className="flex gap-4">
                        <Funnel/>
                        <h3>Filtros</h3>
                    </div>
                    <form onSubmit={buscar}>
                        <select onChange={e => setFiltros({...filtros, escola: e.target.value})}>
                            <option value="">Todas Escolas</option>
                            {escola.map(escola=> <option value={escola}>{escola}</option> )}
                        </select>

                        <select onChange={e => setFiltros({...filtros, tipo_folha: e.target.value})}>
                            <option value="">Todos Tipos</option>
                            {tipo_folha.map(tipo=> <option value={tipo}>{tipo}</option> )}
                        </select>

                        <select onChange={e => setFiltros({...filtros, mes: e.target.value})}>
                            <option value="">Todos os meses</option>
                            {meses.map(mes=> <option value={mes.value}>{mes.label}</option> )}
                        </select>

                        <input
                            type="number"
                            placeholder="Ano"
                            value={filtros.ano}
                            onChange={e => setFiltros({...filtros, ano: e.target.value})}
                        />

                        <button className="bg-blue-600 border rounded-md text-white px-2 hover:bg-blue-800 hover:cursor-pointer">Filtrar</button>
                    </form>
                </div>
                <div>
                    {/* cards aqui */}
                </div>
                <div>
                    <HistoricoImpressoes impressoes={impressoes}/>
                </div>
            </div>
        </main>
    )
}