type Props = {
    nome: string
    preco: number
    duracao: number
    className?: string
}

export function Servico({ nome, preco, duracao, className }: Props) {
    return (
        <div className={`bg-stone-900 text-white p-4 rounded border border-gray-700 ${className}`}>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-lg font-semibold">{nome}</h2>
                    <p>Duração: {duracao} min</p>
                </div>
                <div>
                    <p className="text-amber-400">R${preco.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}