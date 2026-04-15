type Props = {
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

export function ButtonAgenda({ children, onClick, className }: Props) {
    return (
        <button onClick={onClick}
        className={`cursor-pointer bg-amber-400 text-black font-semibold px-4 py-2 rounded text-sm `}>
            {children}
        </button>
    )
}