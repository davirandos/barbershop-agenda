import { Servico } from "../ui/Servico";

export function Servicos () {
    return(
        <section className="w-full flex items-center justify-center flex-col px-3 py-5 gap-5 border-b border-amber-200/20">
            <div className="flex text-center flex-col gap-3 py-2 items-center justify-center">
                <h1 className="text-3xl">Nossos <span className="text-amber-400">Serviços</span></h1>
                <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam.</p>
            </div>
            <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 flex items-center justify-center">
                <Servico nome="Corte de Cabelo" preco={40.00} duracao={30} />
                <Servico nome="Barba" preco={20.00} duracao={20} />
                <Servico nome="Completo (Cabelo + Barba)" preco={55.00} duracao={50} />
                <Servico nome="Luzes" preco={30.00} duracao={25} />
            </div>
        </section>
    )
}