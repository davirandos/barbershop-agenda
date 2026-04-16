import { Servico } from "../ui/Servico";

export function Servicos () {
    return(
        // Seção de Serviços
        <section className="w-full h-full flex items-center justify-center flex-col py-10 border-b border-amber-200/20">
            {/* Container Principal */}
            <div className="flex gap-5 lg:gap-10 flex-col items-center justify-center w-full max-w-5xl">
                {/* Título e Descrição */}
                <div className="flex w-full lg:w-1/3 text-center flex-col gap-3 py-2 items-center justify-center">
                    <h1 className="text-4xl font-bold">Nossos <span className="text-amber-400">Serviços</span></h1>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam.</p>
                </div>
                {/* Lista de Serviços */}
                <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4">
                    <Servico nome="Corte de Cabelo" preco={40.00} duracao={30} />
                    <Servico nome="Barba" preco={20.00} duracao={20} />
                    <Servico nome="Completo (Cabelo + Barba)" preco={55.00} duracao={50} />
                    <Servico nome="Luzes" preco={30.00} duracao={25} />
                    <Servico nome="Alisamento" preco={60.00} duracao={45} />
                    <Servico nome="Coloração" preco={35.00} duracao={30} />
                </div>
            </div>
        </section>
    )
}