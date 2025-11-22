import { useState } from "react";

const suits = ["♠", "♥", "♦", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Create a standard deck
const createDeck = () => {
    const deck: string[] = [];
    suits.forEach((suit) => {
        values.forEach((value) => deck.push(`${value}${suit}`));
    });
    return deck;
};

export default function CardDraw() {
    const [deck, setDeck] = useState(createDeck());
    const [hand, setHand] = useState<string[]>([]);
    const [lastCard, setLastCard] = useState<string | null>(null);

    const drawCard = () => {
        if (deck.length === 0) return alert("Deck is empty!");
        const index = Math.floor(Math.random() * deck.length);
        const card = deck[index];
        setHand([...hand, card]);
        setLastCard(card);

        setDeck(deck.filter((_, i) => i !== index));
    };

    const resetDeck = () => {
        setDeck(createDeck());
        setHand([]);
        setLastCard(null);

    };

    return (
        <div className="p-4">
            <button onClick={drawCard} className="mr-2 p-2 bg-blue-500 text-white">Draw Card</button>
            <button onClick={resetDeck} className="p-2 bg-gray-500 text-white">Reset Deck</button>


            <div className="mb-4">
                <strong>Hand:</strong>
                <div className="grid grid-cols-12 gap-2 mt-2">
                    {hand.map((card, idx) => (
                        <div
                            key={idx}
                            className={`w-16 h-24 flex items-center justify-center text-xl font-bold rounded shadow-lg transition-transform duration-500
              ${card === lastCard ? "transform scale-110 rotate-3 bg-yellow-100" : "bg-white"}`}                      >
                            {card}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <strong>Remaining cards:</strong> {deck.length}
            </div>
        </div>
    );
}
