import { createRef, useEffect, useRef, useState } from "react";
import AnimateBubbles from "@/components/AnimateBubbles.tsx";
import Buble from "@/components/Buble.tsx";

function shuffleArray(array) {
    return array
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);
}

function App() {
    const [ images, setImages ] = useState([]);


    const refs = useRef([]);
    refs.current = images.map((_, i) => refs.current[i] ?? createRef());

    const reorder = () => {
        const shuffledImages = shuffleArray(images);
        setImages(shuffledImages);
    };

    useEffect(() => {
        const createImages = () => {
            const images = Array.from({ length: 20 }).map((_, index) => ({
                id: index + 1,
                text: `Image ${index + 1}`
            }))
            setImages(images)
        }

        createImages()
    }, [])
    return (
        <main className="grid place-items-center gap-5 p-10">
                    <div className="grid gap-4 grid-cols-5">
                        <AnimateBubbles>
                            {images.map((image, index) => <Buble
                                key={image.id}
                                ref={refs.current[index]}
                                text={image.text}
                                id={image.id}
                            />)}
                        </AnimateBubbles>
                    </div>

                <div className="button-wrapper">
                    <button className="button" onClick={reorder}>
                        Re-order images
                    </button>
                </div>
        </main>
    )
}

export default App
