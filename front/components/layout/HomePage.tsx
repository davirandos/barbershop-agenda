"use client"
import { ButtonAgenda } from "../ui/ButtonAgenda";
import Image from "next/image";

export function HomePage () {
    return(
        <section id="home" className="w-full h-screen flex items-center justify-center px-4 flex-col gap-6">
            <div>
                <Image src="/barberwheels-removebg-preview.png" alt="logo" width={400} height={100}></Image>
            </div>

            <div className="flex items-center flex-col text-center max-w-md">
                <h1 className="text-4xl text-yellow-400 font-extrabold py-2">BarberWheels</h1>
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, numquam?</p>
            </div>

            <div className="flex gap-5">
                <ButtonAgenda onClick={() => alert("clicado")}>Agendar Horário</ButtonAgenda>
                <button className="cursor-pointer border border-amber-400 px-4 py-3 w-32 rounded text-sm hover:bg-amber-400/20 text-amber-400">Ver Serviços</button>
            </div>
        </section>
    )
}