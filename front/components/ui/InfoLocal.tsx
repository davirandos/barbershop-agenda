type Props = {
    icon?: string,
    nome: string,
    info: string
}

export function InfoLocal ({icon, nome, info}: Props) {
    return(
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center">
                <img src={icon} alt ={nome} className="w-5 h-5"></img>
            </div>
            <div className="flex flex-col">
                <h1 className="text-sm font-bold">{nome}</h1>
                <p className="text-gray-400 text-sm">{info}</p>
            </div>
        </div>
    )
}