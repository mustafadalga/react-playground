interface Props {
    input: string,
    setInput: (input: string) => void
}

export default function Input({ input, setInput }:Props) {
    return (
        <input type="text"
               value={input}
               onChange={event => setInput(event.target.value)}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-0 focus:border-indigo-300 block w-full p-2.5"
               placeholder="Search"/>
    )
}
