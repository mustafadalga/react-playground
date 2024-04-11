import { useSyncExternalStore } from "react";

function subscribe(onStoreChange) {
    window?.addEventListener("scroll", onStoreChange);
    return () =>
        window?.removeEventListener(
            "scroll",
            onStoreChange
        );
}

function useScrollY(selector = (id) => id) {
    return useSyncExternalStore(
        subscribe,
        () => selector(window?.scrollY),
        () => undefined
    );
}

function ScrollYDefault() {
    const scrollY = useScrollY();
    return <div>{scrollY}</div>;
}

function ScrollYFloored() {
    const to = 100;
    const scrollYFloored = useScrollY((y) =>
        y ? Math.floor(y / to) * to : undefined
    );
    return <div>{scrollYFloored}</div>;
}


export default function ScrollY(){
    return (
        <div className="h-[100rem] border border-gray-700">
            <ScrollYDefault/>
            <ScrollYFloored/>
        </div>
    )
}