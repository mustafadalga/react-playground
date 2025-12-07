import { ReactNode } from "react";

export default function ModalDialog({ title, open, setOpen, children }: {
    title: string,
    children: ReactNode,
    open: boolean,
    setOpen: (status: boolean) => void
}) {
    if (!open) return
    return (
        <section className="z-10 fixed inset-0  size-full grid place-content-center bg-black/75">
            <div className="grid gap-2 max-w-5xl mx-4 lg:mx-auto p-4 rounded-xl shadow-sm bg-white">
                <h1>{title}</h1>
                {children}

                <div>
                    <button onClick={() => setOpen(false)}>Close</button>
                </div>
            </div>
        </section>
    );
};