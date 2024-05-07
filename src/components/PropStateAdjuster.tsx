import { useEffect, useState } from "react";


/*
null
PropStateAdjuster.tsx:25Rendering ListItem 1
PropStateAdjuster.tsx:8yenile
PropStateAdjuster.tsx:11null
 */
function ListV1({ items }) {
    const [ selection, setSelection ] = useState(null);

    // 🔴 Avoid: Adjusting state on prop change in an Effect
    useEffect(() => {
        console.log("yenile")
        setSelection(null);
    }, [ items ]);
    console.log(selection)


    return (
        <div>
            Selection: {selection}
            {items.map(item => (
                <ListItemV2 key={item.id} item={item} onSelect={setSelection}/>
            ))}
        </div>
    )
}

function ListItemV2({ item, onSelect }) {
    console.log("Rendering ListItem", item.id);
    return <div onClick={() => onSelect(item.id)}>{item.text}</div>;
}

/**
 * Logs
 * Current selection: 1
 * PropStateAdjuster.tsx:38 Current selection: null
 * PropStateAdjuster.tsx:24Rendering ListItem 1
 * PropStateAdjuster.tsx:24Rendering ListItem 2
 */
function ListV2({ items }) {
    const [selection, setSelection] = useState(null);
    const [prevItems, setPrevItems] = useState(items);

    if (JSON.stringify(prevItems) !== JSON.stringify(items)) {
        console.log("Items have changed");
        setPrevItems(items);  // Updates previous items to current items
        setSelection(null);   // Resets selection to null immediately before render
    }

    console.log("Current selection:", selection);

    return (
        <div>
            Selection: {selection}
            {items.map(item => (
                <ListItemV2 key={item.id} item={item} onSelect={setSelection} />
            ))}
        </div>
    );
}

function ListV3({ items }) {
    const [selectedId, setSelectedId] = useState(null);
    // ✅ Best: Calculate everything during rendering
    const selection = items.find(item => item.id === selectedId) ?? null;

    console.log("Current selection:", selection,selectedId);

    return (
        <div>
            Selection: {selectedId}
            {items.map(item => (
                <ListItemV2 key={item.id} item={item} onSelect={setSelectedId} />
            ))}
        </div>
    );
}

export default function PropStateAdjuster() {
    const [ items, setItems ] = useState([]);
    const handleItemAdd = () => setItems([ ...items, { id: items.length + 1, text: `Item ${items.length + 1}` } ]);

    return (
        <div>
            <button onClick={handleItemAdd}>add</button>
            <ListV3 items={items}/>
        </div>
    )
}