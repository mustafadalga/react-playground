import { useState } from "react";

export default function Roulette() {
    const [ search, setSearch ] = useState("")

    return (
        <div className="p-4">
            {search}
            <input type="text" value={search}
                   className="border"
                   onChange={(e) => setSearch(e.target.value)}
                   onBeforeInput={(e) => {
                       const char = e.data;
                       if (!char || char < "0" || char > "9") e.preventDefault();
                   }}/>

            <input type="text" className="border"
                   value={search}
                   onChange={(e) => {
                       const val = e.target.value
                       if (val === "" || val === parseInt(val).toString())
                           setSearch(e.target.value)
                   }}/>
        </div>
    );
}
