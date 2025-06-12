import { impressoesHoje, impressoesMes, impressoesTotal, paginasHoje, paginasMes, paginasTotal } from "@/lib/filtros";
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
              <p>Total geral</p>
              <p>{paginasTotal()} páginas</p>
            </div>
          </div>
        </div>
        <div className="border shadow-md p-6 rounded-md">
          <h3 className="text-xl text-gray-600 font-medium">Estatística por escola</h3>
          
        </div>
      </div>
    </main>
  );
}
