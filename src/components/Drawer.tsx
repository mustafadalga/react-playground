import { useEffect, useState } from "react";

export default function Drawer({ isOpen, onEnd }: {
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
            className={`h-screen w-[22rem] fixed right-0 top-0 p-2 border-l bg-white transition-transform duration-300 data-[open=false]:translate-x-[22rem] data-[open=true]:translate-x-0`}
            data-open={isOpen && mounted}>
            content
        </div>
    );
}