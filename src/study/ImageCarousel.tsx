import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Image {
    alt: string,
    src: string
}


const images = [
    {
        src: '1.png',
        alt: '1',
    },
    {
        src: '2.png',
        alt: '2',
    },
    {
        src: 'https://placehold.co/600x900/1e293b/ffffff?text=Forest',
        alt: 'Plants',
    },
    {
        src: 'https://res.cloudinary.com/idemo/image/upload/friends.jpg',
        alt: 'Forest',
    },
    {
        src: 'https://res.cloudinary.com/idemo/image/upload/woman.jpg',
        alt: 'Beach',
    },
    {
        src: 'https://res.cloudinary.com/idemo/image/upload/sofa_cat.jpg',
        alt: 'Yak',
    },
    {
        src: 'https://res.cloudinary.com/idemo/image/upload/car_lady_dog.jpg',
        alt: 'Hay',
    },
    {
        src: 'https://res.cloudinary.com/idemo/image/upload/balloons.jpg',
        alt: 'Building',
    },
];

export default function Usage() {
    return  <ImageCarousel images={images} />
};

function ImageCarousel({ images }: { images: Image[] }) {
    const [ active, setActive ] = useState(0)

    const handleNext = () => {
        setActive(prevState => prevState === images.length - 1 ? 0 : ++prevState)
    }
    const handlePrev = () => {
        setActive(prevState => prevState === 0 ? images.length - 1 : --prevState)
    }

    useEffect(() => {
        const handleEvent = (event: KeyboardEvent) => {
            const code = event.code
            if (code == "ArrowRight") {
                handleNext()
            } else if (code == "ArrowLeft") {
                handlePrev()
            }
        }
        document.addEventListener("keydown", handleEvent)

        return () => document.removeEventListener("keydown", handleEvent)
    }, [ handleNext, handlePrev ])

    const activeImg = images[active]

    return (
        <section className="mx-auto  relative flex w-full max-h-[400px] max-w-[600px]">
            <img src={activeImg.src}
                 alt={activeImg.alt}
                 key={activeImg.src}
                 className={`bg-black/60 object-contain transition-all aspect-square animate-fade`}/>
            {/*<Images images={images} active={active}/>*/}
            <ButtonNavigation handleNext={handleNext} handlePrev={handlePrev}/>
            <DotNavigation images={images} active={active} setActive={setActive}/>
        </section>
    );
}

function Images({ images, active }: { images: Image[], active: number }) {
    return <ul className="flex" role="list">
        {images.map((image, index) => <li key={image.src} role="listitem"
                                          className={` ${index === active ? "block" : "hidden"}`}>
            <img src={image.src} alt={image.alt}
                 className={`size-full bg-black/60 object-contain transition-all`}/>
        </li>)}
    </ul>

}

function ButtonNavigation({ handleNext, handlePrev }: {
    handleNext: () => void,
    handlePrev: () => void,
}) {
    return <nav
        className="absolute -translate-y-1/2 top-1/2 w-full px-4 flex items-center justify-between"
        aria-label="Arrow navigation">
        <button className="rounded-full size-10 shrink-0 p-2 bg-black/40"
                aria-label="Previous page"
                onClick={handlePrev}>⬅️
        </button>
        <button className="rounded-full size-10 shrink-0 p-2 bg-black/40" aria-label="next page"
                onClick={handleNext}>➡️
        </button>
    </nav>
}

function DotNavigation({ images, active, setActive }: {
    images: Image[],
    active: number,
    setActive: Dispatch<SetStateAction<number>>
}) {
    return <nav aria-label="dots navigation" className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <ul className="flex items-center gap-2 bg-black/75 p-2 rounded-xl" role="list">
            {images.map((image, index) => <li key={image.src} role="button"
                                              className={`cursor-pointer rounded-full size-2.5 ${active == index ? "bg-gray-100" : "bg-gray-500"}`}
                                              onClick={() => setActive(index)}></li>)}
        </ul>
    </nav>
}