"use client"
import { ButtonAgenda } from "../ui/ButtonAgenda";

export function Chame () {
    return(
        <section className="w-full h-88 text-white flex items-center justify-center flex-col px-3 py-5 gap-5 border-b border-amber-200/20">
            <div className="flex text-center flex-col w-68 gap-4">

                <h1 className="text-3xl font-medium">Pronto para o seu <span className="text-amber-400 font-bold">melhor corte</span>?</h1>
                <p className="text-md text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div>
                    <ButtonAgenda onClick={() => alert("clicado")}>Agende Agora</ButtonAgenda>
                </div>
            </div>
        </section>
    )
}