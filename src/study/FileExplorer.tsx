import { useState } from "react";

interface FileObject {
    id: number;
    name: string;
    children?: FileObject[];
}

export default function App() {
    const data = [
        {
            id: 1,
            name: 'README.md',
        },
        {
            id: 2,
            name: 'Documents',
            children: [
                {
                    id: 3,
                    name: 'Word.doc',
                },
                {
                    id: 4,
                    name: 'Powerpoint.ppt',
                },
            ],
        },
        {
            id: 5,
            name: 'Downloads',
            children: [
                {
                    id: 6,
                    name: 'unnamed.txt',
                },
                {
                    id: 7,
                    name: 'Misc',
                    children: [
                        {
                            id: 8,
                            name: 'foo.txt',
                        },
                        {
                            id: 9,
                            name: 'bar.txt',
                        },
                    ],
                },
            ],
        },
        {
            id: 7,
            name: 'react.js',
        },
        {
            id: 6,
            name: 'Desktop',
            children: [],
        },
        {
            id: 10,
            name: 'Ataturk',
            children: [
                {
                    id: 11,
                    name: 'foo.txt',
                },
                {
                    id: 12,
                    name: 'bar.txt',
                    children: [
                        {
                            id: 13,
                            name: 'foo.txt',
                        },
                        {
                            id: 14,
                            name: 'bar.txt',
                            children: [
                                {
                                    id: 1,
                                    name: 'd.txt',
                                },
                                {
                                    id: 2,
                                    name: 'b.txt',
                                },
                                {
                                    id: 3,
                                    name: 'foo.txt',
                                },
                                {
                                    id: 4,
                                    name: 'a.txt',
                                },
                                {
                                    id: 5,
                                    name: 'c.txt',
                                    children: [
                                        {
                                            id: 13,
                                            name: 'foo.txt',
                                        },
                                    ]
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ];

    return <FileExplorer data={data}/>;
}


function FileExplorer({ data }: { data: FileObject[] }) {
    const [ obj, setObj ] = useState<Record<number, boolean>>({})

    const files = data.filter(row => Array.isArray(row.children)).sort((a: FileObject, b: FileObject) => a.name.localeCompare(b.name))
    const folders = data.filter(row => Array.isArray(row.children)).sort((a, b) => a.name.localeCompare(b.name))
    const onFolderClick = (row: FileObject) => {
        setObj(prevState => ({
            ...prevState,
            [row.id]: !prevState[row.id]
        }))
    }
    return (
        <div className="grid pl-2">
            {folders.map(row => row.children ? (<div key={row.id}>
                <FolderName onClick={() => onFolderClick(row)} row={row} symbol={obj[row.id] ? "-" : "+"}/>
                {obj[row.id] && <FileExplorer data={row.children}/>}
            </div>) : null)}

            {files.map(row => <span key={row.id}>{row.name}</span>)}

        </div>
    );
}

function FolderName({ onClick, row, symbol }) {
    return <h1 className="font-bold" onClick={onClick}>{row.name} ({symbol})</h1>
}
