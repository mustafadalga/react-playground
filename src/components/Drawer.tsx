import { useEffect, useRef, useState } from "react";

export default function Drawer({ isOpen, setIsAnimating }) {
    const container = useRef<HTMLDivElement | null>(null)
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);

        const handleAnimationEnd = () => {
            console.log(2222)
            setIsAnimating(false)
        }
        if (container.current) {
            container.current.addEventListener('transitionend', handleAnimationEnd)
            container.current.addEventListener('transitioncancel', handleAnimationEnd)
        }

        return () => {
            if (container.current) {
                console.log('it rendered')
                container.current.removeEventListener('transitionend', handleAnimationEnd)
                container.current.removeEventListener('transitioncancel', handleAnimationEnd)
            }
        }
    }, [])
    return (
        <div
            ref={container}
            className={`h-screen w-[22rem] fixed right-0 top-0 border bg-white transition-transform duration-300  ${mounted && isOpen ? "translate-x-0" : "translate-x-[22rem]"}`}
            data-open={isOpen}>
            {isOpen}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur, autem consequuntur deserunt
            eos fugit hic nostrum nulla provident, quaerat rerum vitae voluptate. Impedit in laborum necessitatibus
            quibusdam saepe veritatis!

        </div>
    );
}