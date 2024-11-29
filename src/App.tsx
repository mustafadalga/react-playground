import V1 from "./V1.tsx";
import V2 from "./V2.tsx";
import V3 from "./V3.tsx";
import V4 from "./V4.tsx";
import V5 from "./V5.tsx";
import V6 from "./V6.tsx";
import V7 from "./V7.tsx";
import V8 from "./V8.tsx";
import V9 from "./V9.tsx";
import V10 from "./V10.tsx";
import React, { useState } from "react";

export default function App() {
    const [count,setCount] = useState(0);

    return (
        <main className="grid gap-10 p-10">
            <button onClick={() => setCount(prevState => prevState + 1)}>Increase {count}</button>

            {/*<V1/>*/}
            {/*<V2/>*/}
            {/*<V3/>*/}
            {/*<V4/>*/}
            {/*<V5/>*/}
            {/*<V6/>*/}
            {/*<V7/>*/}
            {/*<V8/>*/}
            {/*<V9/>*/}
            <V10/>
        </main>
    )
}
