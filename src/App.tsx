// @ts-nocheck
import { useState, useCallback } from "react";

// I know, code it wrong but it doesn't matter. You can focus about debugging.
export default function App() {
    const [ input, setInput ] = useState({
        id: 1,
        gamers: [
            {
                id: "gamer",
                color: "black"
            },
            {
                id: "computer",
                color: "white"
            }
        ],
        moveOrder: "gamer",
    });
    console.log("input",input.moveOrder)

    const handleAsComputer = useCallback(async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("as computer", input)
        setInput(({ ...input, moveOrder: nextMoveOrderID(input) }));

    }, [ input ])

    const handleHint = useCallback(() => {
        setInput(({ ...input, moveOrder: nextMoveOrderID(input) }));
        console.log("as gamer", input)
        handleAsComputer();

    }, [ input ])
    return (
        <div className="232">
            <button onClick={handleHint}>Click</button>
        </div>
    )
}

function nextMoveOrderID(game): string {
    if (game) {
        if (game.moveOrder === game.gamers[0].id) {
            return game.gamers[1].id
        } else {
            return game.gamers[0].id
        }
    }
    return "";
}