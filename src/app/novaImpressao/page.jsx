import Form from "@/components/form";
import { Toaster } from "react-hot-toast";

export default function NovaImpressao(){

    return(
        <>
            <Toaster position="bottom-center"/>
            <main className="flex flex-col items-center min-h-screen p-8 w-[1280px]">
                <div className="flex flex-col bg-white/80 border border-blue-200 rounded-md shadow-lg gap-4 p-6 w-full">
                    <div className="mb-5 text-start">
                        <h2 className="text-2xl font-semibold text-blue-500">Registrar nova impressão</h2>
                        <p className="text-md text-gray-600">Adicione uma nova impressão ao sistema</p>
                    </div>
                    <Form/>
                </div>
            </main>
        </>
    )
}