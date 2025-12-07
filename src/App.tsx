import ImageCarousel from "@/study/ImageCarousel.tsx";
import { useState } from "react";
import ImageCarouselV2 from "@/study/ImageCarouselV2.tsx";
import DrawerDemo from "@/study/drawer-transition-animation/Drawer.tsx";


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

export default function App() {

    return (
        <div className="flex flex-col gap-5">
            <DrawerDemo/>
            <ToggleFade/>
            <ImageCarousel images={images} />
            <ImageCarouselV2 images={images}/>
        </div>
    );
}


 function ToggleFade() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(prev => !prev)}>Toggle</button>
            {show && <div key={Date.now()} className="fade-box fade-in">Hello</div>}
        </div>
    );
}