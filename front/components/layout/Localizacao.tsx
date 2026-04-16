import { InfoLocal } from "../ui/InfoLocal";
import { Map } from "../ui/Map";

export function Localizacao () {
    return(
        // Seção de Localização
        <section className="w-full min-h-full text-white flex items-center justify-center flex-col px-3 py-10 border-b border-amber-200/20">

            {/* Div principal inclui tudo */}
            <div className="flex items-center justify-center flex-col lg:flex-row gap-10 lg:gap-2 max-w-6xl w-full mx-auto">

                {/* Div que inclui o título e as informações */}
                <div className="flex xl:items-start sm:items-center flex-col gap-10 w-full">

                    {/* Título da seção */}
                    <div>
                        <h1 className="text-4xl text-amber-400 font-bold">Localização</h1>
                    </div>

                    {/* Informações de Localização */}
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full">

                        {/* Componente de informação reutilizável para cada item de informação */}
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
                </div>

                {/* Div que inclui o mapa */}
                <div className="w-full h-full">
                    <Map />
                </div>
            </div>

        </section>
    )
}