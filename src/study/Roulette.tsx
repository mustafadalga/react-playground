import { useState } from "react";

const numbers = Array.from({ length: 37 }, (_, i) => i);

const getColor = (n: number) => {
    if (n === 0) return "bg-green-500";
    const reds = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);
    return reds.has(n) ? "bg-red-500" : "bg-black text-white";
};

export default function Roulette() {
    const [result, setResult] = useState<number | null>(null);
    const [spinning, setSpinning] = useState(false);

    const spin = () => {
        if (spinning) return;
        setSpinning(true);
        setResult(null);

        setTimeout(() => {
            const index = Math.floor(Math.random() * numbers.length);
            setResult(numbers[index]);
            setSpinning(false);
        }, 1000);
    };

    return (
        <div className="p-4">
            <button onClick={spin} className="p-2 bg-blue-600 text-white rounded">
                Spin
            </button>

            <div className="mt-6">
                <strong>Wheel:</strong>
                <div className="mt-2 grid grid-cols-8 gap-2">
                    {numbers.map((n) => (
                        <div
                            key={n}
                            className={`w-10 h-10 flex items-center justify-center text-sm rounded ${getColor(
                                n
                            )} ${result === n ? "ring-4 ring-yellow-300" : ""}`}
                        >
                            {n}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-4 text-xl">
                Result: {result !== null ? result : ""}
            </div>
        </div>
    );
}
