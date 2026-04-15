import { InfoLocal } from "../ui/InfoLocal";
import { Map } from "../ui/Map";

export function Localizacao () {
    return(
        <section className="w-full h-screen text-white flex items-center justify-center flex-col px-3 py-5 gap-5 border-b border-amber-200/20">
            <div>
                <h1>LOCALIZAÇÃO</h1>
            </div>

            <div className="flex grid md:grid-cols-2 grid-cols-1 gap-5">
                <InfoLocal
                    icon="/path/to/icon.png"
                    nome="Endereço"
                    info="Av. Paulista, 1000 - São Paulo/SP"
                />
                <InfoLocal
                    icon="/path/to/icon.png"
                    nome="Telefone"
                    info="(11) 99999-9999"
                />
                <InfoLocal
                    icon="/path/to/icon.png"
                    nome="Horário de Funcionamento"
                    info="Segunda a Sexta: 9h - 19h | Sábado: 9h - 17h"
                />
                <InfoLocal
                    icon="/path/to/icon.png"
                    nome="Avaliações"
                    info="4.8/5 (200 avaliações)"
                />
            </div>

            <div className="w-full h-full">
                <Map />
            </div>

        </section>
    )
}