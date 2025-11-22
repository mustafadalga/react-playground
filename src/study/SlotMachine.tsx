/* eslint-disable @typescript-eslint/no-explicit-any */
const symbols: string[] = [ "🍒", "🍋", "⭐", "7" ]
import { useState } from "react";

function debounce<F extends (...args:any[])=>any>(func: F, wait: number) {
    let timerId: number | null


    return function (this:any,...args: Parameters<F>) {
        if (timerId) {
            clearTimeout(timerId)
        }
        const context = this;
        timerId = setTimeout(() => func.apply(context, args), wait)
    }
}


export default function App() {
    const [ result, setResult ] = useState<string[]>([])
    const spin = () => {
        const rolls = 10; // number of intermediate updates
        const interval = 50; // ms between updates
        let count = 0;

        const rollingInterval = setInterval(() => {
            // setResult(result.map(() => symbols[Math.floor(Math.random() * symbols.length)]));
            count++;
            if (count >= rolls) {
                clearInterval(rollingInterval);
                // final result
                setResult(result.map(() => symbols[Math.floor(Math.random() * symbols.length)]));
            }
        }, interval);
    };

    const didWin = result.length ? result.every(row => row === result[0]) : false
    console.log(result)
    const debouncedSpin = debounce(spin, 1000)
    return (
        <div>
            <button onClick={debouncedSpin} disabled={didWin}>Spin</button>
            <div>
                <div className="flex gap-2">
                    {result.map((symbol, index) => (
                        <div key={index} className="h-10 w-10 overflow-hidden border">
                            <div
                                className="transition-transform duration-500"
                                style={{ transform: `translateY(-${symbols.indexOf(symbol) * 2.5}rem)` }}
                            >
                                {symbols.map((s, i) => (
                                    <div key={i} className="h-10 flex items-center justify-center">{s}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


                {result.length ? <span>you {didWin ? "win" : "Lose"}</span> : null}
            </div>
        </div>
    );
};