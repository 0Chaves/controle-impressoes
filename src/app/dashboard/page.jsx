import { impressoes_capivari, impressoes_mundoencantado, impressoes_telbio, impressoesHoje, impressoesMes, impressoesTotal, paginas_capivari, paginas_mundoencantado, paginas_telbio, paginasHoje, paginasMes, paginasTotal } from "@/lib/filtros";
import { Calendar, FileText, Printer } from "lucide-react";

export default async function Dashboard() {

  return (
    <main className="flex flex-col items-center min-h-screen p-8 w-[1280px]">
      <div className="bg-white rounded-md shadow-lg w-full p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-blue-600">Dashboard de Impressões</h2>
          <p className="text-base text-gray-600">Visão geral das impressões realizadas pelas escolas</p>
        </div>
        <div className="flex gap-2 justify-between">
          <div className="card_dashboard from-blue-500 to-blue-600">
            <div>
              <Calendar className="stroke-2"/>
            </div>
            <div className="flex flex-col text-start space-y-1">
              <p className="font-bold text-2xl">{impressoesHoje()}</p>
              <p>Impressões hoje</p>
              <p>{paginasHoje()} páginas</p>
            </div>
          </div>
          <div className="card_dashboard from-purple-500 to-purple-600">
            <div><FileText className="stroke-2"/></div>
            <div className="flex flex-col text-start space-y-1">
              <p className="font-bold text-2xl">{impressoesMes()}</p>
              <p>Impressões neste mês</p>
              <p>{paginasMes()} páginas</p>
            </div>
          </div>
          <div className="card_dashboard from-pink-500 to-pink-600">
            <div><Printer className="stroke-2"/></div>
            <div className="flex flex-col text-start space-y-1">
              <p className="font-bold text-2xl">{impressoesTotal()}</p>
              <p>Impressões no Total geral</p>
              <p>{paginasTotal()} páginas</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-100 shadow-md p-6 rounded-md space-y-4">
          <h3 className="text-xl text-gray-600 font-medium">Estatística por escola</h3>
          <div className="w-full p-6 flex justify-between items-center border rounded-md shadow-lg bg-blue-100 border-blue-200 text-blue-600 ">
            <div className="text-start border border-blue-200">
              EMEF Capivari
            </div>
            <div className="flex flex-col text-end space-y-1">
                <p className="font-bold text-2xl">{impressoes_capivari()}</p>
                <p>impressões</p>
                <p>{paginas_capivari()} páginas</p>
            </div>
          </div>
          <div className="w-full p-6 flex justify-between items-center border rounded-md shadow-lg bg-green-100 border-green-200 text-green-600 ">
            <div className="text-start border border-green-200">
              EMEF Telbio Farias Cardoso
            </div>
            <div className="flex flex-col text-end space-y-1">
                <p className="font-bold text-2xl">{impressoes_telbio()}</p>
                <p>impressões</p>
                <p>{paginas_telbio()} páginas</p>
            </div>
          </div>
          <div className="w-full p-6 flex justify-between items-center border rounded-md shadow-lg bg-purple-100 border-purple-200 text-purple-600 ">
            <div className="text-start border border-purple-200">
              EMEI Mundo Encantado
            </div>
            <div className="flex flex-col text-end space-y-1">
                <p className="font-bold text-2xl">{impressoes_mundoencantado()}</p>
                <p>impressões</p>
                <p>{paginas_mundoencantado()} páginas</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
