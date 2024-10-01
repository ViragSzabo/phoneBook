interface PhoneNumberProps { 
    list: string[], 
    onRemove: (phone: string) => void 
}

export default function PhoneNumber({ list, onRemove }: PhoneNumberProps) {
    return (
        <div className="flex flex-wrap">
            {list.length === 0 ? (
                <p className="text-gray-500">No phone numbers found.</p>
            ) : (
                list.map((data, index) => {
                    const formattedNumber = data.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    return (
                        <div 
                            key={index} 
                            className="group shadow shadow-md m-5 p-3 w-1/4 hover:bg-zinc-300 hover:shadow-lg cursor-pointer"
                            onClick={() => onRemove(data)}
                        >
                            <p className="ml-2 text-sm antialiased font-mono text-neutral-500 group-hover:text-neutral-900">
                                {formattedNumber}
                            </p>
                        </div>
                    );
                })
            )}
        </div>
    );
}