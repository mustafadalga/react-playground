import { useEffect, useState } from "react";
import { useAnimatedToggle } from "@/study/drawer-transition-animation/useAnimatedToggle.ts";

function Drawer({ isOpen, onEnd }: {
    isOpen: boolean,
    onEnd: () => void
}) {
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])
    return (
        <div
            onTransitionEnd={onEnd}
            className={`h-screen z-10 w-[22rem] fixed right-0 top-0 p-2 border-l bg-gray-600 transition-transform duration-300 data-[open=false]:translate-x-[22rem] data-[open=true]:translate-x-0`}
            data-open={isOpen && mounted}>
            content
        </div>
    );
}


export default function DrawerDemo() {
    const { isOpen, shouldRender, onEnd,toggle } = useAnimatedToggle();

    return (
        <div className='m-4'>
            <button onClick={toggle}>toggle drawer {isOpen}</button>

            {shouldRender && <Drawer isOpen={isOpen} onEnd={onEnd} />}

        </div>
    )
}

