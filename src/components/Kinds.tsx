import { kinds } from "@/data/movies.ts";

interface Props {
    onSelect: (kind: string) => void,
    onClear: () => void
}

export default function Kinds({ onSelect, onClear }: Props) {
    return (
        <ul className="flex items-center gap-3 flex-wrap">
            <li onClick={onClear}
                className="text-center cursor-pointer w-32 px-5 py-2 bg-indigo-200 hover:bg-indigo-300 rounded text-sm
                font-semibold text-gray-700">
                Clear Filter
            </li>
            {kinds.map(kind => <li
                key={kind}
                onClick={() => onSelect(kind)}
                className="text-center cursor-pointer w-32 px-5 py-2 bg-indigo-200 hover:bg-indigo-300 rounded text-sm font-semibold text-gray-700">{kind}</li>)}
        </ul>
    )
}
