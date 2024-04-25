import { createRef, useEffect, useRef, useState } from "react";
import AnimateBubbles from "@/components/AnimateBubbles.tsx";
import Buble from "@/components/Buble.tsx";

function shuffleArray(array) {
    const tempArray=[...array];
    const first =tempArray[0];
    tempArray[0] = tempArray[tempArray.length - 1];
    tempArray[tempArray.length - 1] = first;

    return tempArray;


    return array
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);
}

function App() {
    const [ images, setImages ] = useState([
        { id: "1", text: "Image 1" },
        { id: "2", text: "Image 2" },
        // { id: "3", text: "Image 3" },
        // { id: "4", text: "Image 4" },
        // { id: "5", text: "Image 5" }
    ]);

    const refs = useRef([]);
    refs.current = images.map((_, i) => refs.current[i] ?? createRef());

    const reorder = () => {
        const shuffledImages = shuffleArray(images);
        setImages(shuffledImages);
    };
    return (
        <main className="grid gap-5 p-10">
            <div>
                <div className="bubbles-wrapper">
                    <div className="bubbles-group">
                        <AnimateBubbles>
                            {images.map((image, index) => <Buble
                                key={image.id}
                                ref={refs.current[index]}
                                text={image.text}
                                id={image.id}
                            />)}
                        </AnimateBubbles>

                    </div>
                </div>

                <div className="button-wrapper">
                    <button className="button" onClick={reorder}>
                        Re-order images
                    </button>
                </div>
            </div>
        </main>
    )
}

export default App
