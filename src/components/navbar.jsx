'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, File, Funnel } from "lucide-react";

export default function Navbar(){

    const path = usePathname()

    return(
        <nav className="flex bg-gray-100 w-[1280px] justify-center">
            <Link className="w-full p-4" href={'/dashboard'}>
                <div className={path.startsWith('/dashboard') ? 'active' : 'inactive'}>
                    <Calendar/>
                    <span>Dashboard</span>
                </div>
            </Link>
            <Link className="w-full p-4" href={'/novaImpressao'}>
                <div className={path.startsWith('/novaImpressao') ? 'active' : 'inactive'}>
                    <File/>
                    <span>Nova Impressão</span>
                </div>
            </Link>
            <Link className="w-full p-4" href={'/historico'}>
                <div className={path.startsWith('/historico') ? 'active' : 'inactive'}>
                    <Funnel/>
                    <span>Histórico</span>
                </div>
            </Link>
            
        </nav>
    )
}