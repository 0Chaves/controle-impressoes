'use client'

import { escola, tipo_folha } from "@/enums/enums"
import { salvarImpressao } from "@/lib/impressaoDB"
import { useState } from "react"
import toast from "react-hot-toast"
import { Printer } from "lucide-react"

export default function Form(){
    const [impressao, setImpressao] = useState({
        escola: '',
        tipo_folha: '',
        paginas: 0,
        data: new Date().toISOString().split('T')[0]
    })

    const salvar = async (e) =>{
        e.preventDefault()
        try{
            await salvarImpressao(impressao)
            toast.success("Impressão salva com sucesso!")
            setImpressao({
                escola:'',
                tipo_folha:'',
                paginas:0,
                data: new Date().toISOString().split('T')[0],
            })
        } catch (error) {
            toast.error("Erro ao salvar impressão!")
            console.log(error)
        }
    }

    return(
        <form onSubmit={salvar} className="w-full">
            
            <div className="w-full flex justify-around space-y-6 gap-6">
                <div className="flex flex-col w-full">
                    <label className="form_label" htmlFor="escola">Escola*</label>
                    <select className="w-full border rounded-md p-1" name="escola" value={impressao.escola} onChange={e=>setImpressao({...impressao, escola: e.target.value})}>
                        <option value="" hidden disabled>Selecione a escola</option>
                        {escola.map(escola=><option key={escola} value={escola}>{escola}</option> )}
                    </select>
                </div>
                <div className="flex flex-col w-full">
                    <label className="form_label" htmlFor="data">Data*</label>
                    <input className="w-full border rounded-md p-1" type="date" name="data" value={impressao.data} onChange={e=>setImpressao({...impressao, data: e.target.value})}/>
                </div>
            </div>
            <div className="w-full flex justify-around space-y-6 gap-6">
                <div className="flex flex-col w-full">
                    <label className="form_label" htmlFor="tipo_folha">Tipo de folha*</label>
                    <select className="w-full border rounded-md p-1" name="tipo_folha" value={impressao.tipo_folha} onChange={e=>setImpressao({...impressao, tipo_folha: e.target.value})}>
                        <option value="" hidden disabled>Selecione o tipo de folha</option>
                        {tipo_folha.map(tipo=> <option key={tipo} value={tipo}>{tipo}</option> )}
                    </select>
                </div>
                <div className="flex flex-col w-full">
                    <label className="form_label" htmlFor="paginas">Paginas*</label>
                    <input className="w-full border rounded-md p-1" type="number" name="paginas" value={impressao.paginas} onChange={e=>setImpressao({...impressao, paginas: Number(e.target.value)})}/>
                </div>
            </div>
            
            <div className="bg-cyan-100 rounded-md text-black font-normal flex gap-2 items-center p-4">
                <Printer/>
                <div>
                    <h3 className="text-xl">Resumo da impressão</h3>
                    <p className="text-base">{impressao.escola} • Impressão em {impressao.tipo_folha} • {impressao.paginas} páginas • Data: {impressao.data}</p>
                </div>
            </div>
            
            <button className="bg-blue-600 text-white rounded-md w-full justify-center mt-2 flex px-6 py-2 gap-2 hover:cursor-pointer hover:bg-blue-800 justify-self-center"><Printer/>Registrar Impressão</button>
        </form>
    )
}