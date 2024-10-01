interface ButtonProps { 
    text: string,
    onClick: () => void
}
export default function Button({ text, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className="p-2 w-28 rounded-xl shadow shadow-lg bg-neutral-300 hover:bg-neutral-500">
            <p className="text-base font-bold hover:text-neutral-300"> {text} </p>
        </button>
    )
}