import { useState, useEffect } from "react";
import useModalStore from "@/hooks/useModalStore.ts";
import IconCross from "./IconCross.tsx";

export default function Modal() {
    const [ showModalContent, setShowModalContent ] = useState(false);
    const { toggleModalVisibility } = useModalStore();

    function toggleModalContent() {
        setShowModalContent(!showModalContent);
    }

    function handleCloseModal() {
        toggleModalContent()
        setTimeout(() => toggleModalVisibility(false), 150)
    }


    useEffect(() => {
        setTimeout(toggleModalContent, 100)
    }, []);

    return (
        <section className="fixed inset-0 bg-black/50 z-50">
            <div className="h-screen sticky top-0 grid place-items-center p-8">

                <div
                    className={`${showModalContent ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} transition duration-300 relative w-full max-w-3xl rounded-3xl px-16 py-12 bg-white overflow-hidden shadow-[0_2px_3px_rgba(0,0,0,0.06)]`}>

                    <div className="absolute right-6 top-6" onClick={handleCloseModal}>
                        <IconCross
                            fillClass="fill-blue-500"
                            className="w-2 h-2 lg:w-3 lg:h-3 cursor-pointer"/>
                    </div>


                    <h1
                        className="font-bold text-center text-2xl text-gray-900 lg:text-3xl xl:text-4xl 2xl:text-[42px]">
                        Login
                    </h1>

                    <div className="max-w-[400px] mx-auto mt-8">

                        <div className="mb-6">
                            <label htmlFor="username"
                                   className="block font-normal text-gray-900 text-xs lg:text-sm mb-2">
                                Username</label>
                            <input type="text"
                                   id="username"
                                   placeholder="Your username"
                                   required
                                   className="w-full h-10 lg:h-11 xl:h-12 2xl:h-14 font-normal text-gray-900 placeholder-text-500 text-xs md:text-sm 2xl:text-base border border-solid border-gray-300 focus:border-gray-500 outline-none  rounded-lg p-2 lg:px-3 2xl:px-4"/>

                        </div>


                        <div className="mb-6">
                            <label htmlFor="password"
                                   className="block font-normal text-gray-900 text-xs lg:text-sm mb-2">
                                Password</label>
                            <input type="text"
                                   id="password"
                                   placeholder="Your password"
                                   required
                                   className="w-full h-10 lg:h-11 xl:h-12 2xl:h-14 font-normal text-gray-900 placeholder-text-500 text-xs md:text-sm 2xl:text-base border border-solid border-gray-300 focus:border-gray-500 outline-none  rounded-lg p-2 lg:px-3 2xl:px-4"/>
                        </div>


                        <div className="mb-6 flex items-center gap-3">
                            <button type="button"
                                    onClick={handleCloseModal}
                                    className="cursor-pointer w-full max-w-[10rem] bg-white border border-solid border-gray-200 hover:border-gray-500 text-blue-500 text-center rounded-lg font-bold text-xs lg:text-sm	xl:text-base h-9 xl:h11 2xl:h-12">
                                Cancel
                            </button>

                            <button type="button"
                                    onClick={handleCloseModal}
                                    className="cursor-pointer w-full bg-blue-500 text-white text-center rounded-lg font-bold text-xs lg:text-sm	xl:text-base h-9 xl:h11 2xl:h-12">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}