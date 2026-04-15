"use client"
import Image from "next/image"
import { ButtonAgenda } from "../ui/ButtonAgenda"

export function Navbar() {
    return(
        <nav className="w-full fixed h-15 bg-stone-950 border-b border-amber-400 flex items-center justify-between px-4">
            <div className="titulo">
                <h1 className="text-yellow-400">BarberWheels</h1>
            </div>

            <div className="flex gap-5">
                <button className="text-sm">Entrar</button>
                <ButtonAgenda onClick={() => alert("clicado")}>Agendar</ButtonAgenda>
            </div>

        </nav>
    )
}