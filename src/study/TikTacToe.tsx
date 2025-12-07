import { useState } from "react";

enum Player {
    O = "O",
    X = "X",
}

const gridSize = 3
type Grid = (Player | "")[][]

function getStatus(grid: Grid): { winner: Player | null, isDraw: boolean } {
    const checkLine = (cells: (Player | "")[]) => {
        const first = cells[0]
        if (!first) return null

        return cells.every(cell => cell == first) ? first : null
    }

    // rows
    for (let row = 0; row < gridSize; row++) {
        const winner = checkLine(grid[row])

        if (winner) {
            return { winner, isDraw: false }
        }
    }


    //columns
    for (let col = 0; col < gridSize; col++) {
        const columns = grid.map(row => row[col])
        const winner = checkLine(columns)

        if (winner) {
            return { winner, isDraw: false }
        }
    }

    // Check main diagonal
    const mainDiagonal = Array.from({ length: gridSize }, (_, i) => grid[i][i])
    const winnerMain = checkLine(mainDiagonal);
    if (winnerMain) {
        return { winner: winnerMain, isDraw: false }
    }

    // Anti-diagonal
    const antiMainDiagonal = Array.from({ length: gridSize }, (_, i) => grid[i][gridSize - 1 - i])
    const winnerAntiMainDiagonal = checkLine(antiMainDiagonal);

    if (winnerAntiMainDiagonal) {
        return { winner: winnerAntiMainDiagonal, isDraw: false }
    }

    return { winner: null, isDraw: grid.every(row => row.every(cell => cell)) }
}


function generateGrid(): Grid {
    return Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ""))
}


export default function TikTacToe() {
    const [ grid, setGrid ] = useState<Grid>(generateGrid)
    const [ activePlayer, setActivePlayer ] = useState<Player | null>(Player.X)
    const state = getStatus(grid)

    const onSelect = (row: number, col: number) => {
        if (!activePlayer || grid[row][col] || state.isDraw || state.winner) return;

        const newGrid = structuredClone(grid)
        newGrid[row][col] = activePlayer
        setGrid(newGrid)
        setActivePlayer(prev => prev === Player.O ? Player.X : Player.O)
    }

    const onReset = () => {
        setActivePlayer(Player.X)
        setGrid(generateGrid)
    }


    return (
        <div className="grid">
            <span aria-label="winner status" aria-live="polite">
                {state.winner ? `Winner is ${state.winner}` : state.isDraw ? "Draw" : ""}
            </span>

            <div className="inline-grid grid-cols-3 border" role="grid" aria-label="Tic tac toe board">
                {grid.flat().map((cell, rowIndex) => {
                    const row = Math.floor(rowIndex / gridSize)
                    const col = rowIndex % gridSize

                    return <div key={rowIndex}
                                onClick={() => onSelect(row, col)}
                                tabIndex={state.winner || state.isDraw ? -1 : 0}
                                onKeyDown={event => {
                                    if (event.code == "Enter") {
                                        onSelect(row, col)
                                    }
                                }}
                                role="gridcell"
                                aria-label={`Row ${row+1}, Column ${col+1}, ${cell || 'empty'}`}
                                className={`size-20 text-5xl grid place-items-center not-nth-[3n]:border-r not-nth-last-[-n+3]:border-b`}>{cell}</div>
                })}


            </div>
            <button onClick={onReset} aria-label="button actions">Reset</button>

        </div>
    );
}