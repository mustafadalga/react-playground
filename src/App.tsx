import { lazy, Suspense, useEffect } from "react";
import useModalStore from "@/hooks/useModalStore.ts";

const Modal = lazy(() => import("@/components/Modal.tsx"))

function Loading() {
    return <h2>🌀 Loading...</h2>;
}


function App() {
    const {
        isModalOpen, toggleModalVisibility
    } = useModalStore();

    useEffect(() => {
        console.log(isModalOpen)

    }, [ isModalOpen ]);


    return (
        <main className="grid gap-4">
            <button type="button"
                    onClick={() => toggleModalVisibility(true)}
                    className="w-60 bg-blue-500 text-white text-center rounded-lg font-bold text-xs lg:text-sm xl:text-base h-9 xl:h11 2xl:h-12">
                Open Modal
            </button>

            <Suspense fallback={<Loading/>}>
                {isModalOpen && <Modal/>}
            </Suspense>
        </main>
    )
}

export default App
