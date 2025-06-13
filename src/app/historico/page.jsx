'use client'
import HistoricoImpressoes from "@/components/historicoImpressoes"
import { Funnel } from "lucide-react"
import { useState } from "react"

export default function Historico(){

    const [filtroEscola, setFiltroEscola] = useState("")
    const [filtroMes, setFiltroMes] = useState("")
    const [filtroAno, setFiltroAno] = useState("")
    const [filtroTipoFolha, setFiltroTipoFolha] = useState("")

    const limparFiltros = (e) =>{
        e.preventDefault()
        setFiltroEscola("")
        setFiltroMes("")
        setFiltroAno("")
        setFiltroTipoFolha("")
    }

    const buscar = (e) => {
        
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

                </div>
                <div>
                    {/* cards aqui */}
                </div>
                <div>
                    <HistoricoImpressoes filtroEscola={filtroEscola} filtroMes={filtroMes} filtroAno={filtroAno} filtroTipoFolha={filtroTipoFolha}/>
                </div>
            </div>
        </main>
    )
}