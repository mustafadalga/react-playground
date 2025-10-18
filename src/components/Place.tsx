import "@/tailwind.css"

export default function Align() {
    return (
        <div>
            * **place-self** → shorthand for **align-self + justify-self** on a **single grid item**.
            * **place-items** → shorthand for **align-items + justify-items** on **all grid items**.
            * **place-content** → shorthand for **align-content + justify-content** on the **entire grid or multi-line
            flex container**.

            <section>
                <h1>place-content</h1>
                <div className="grid h-20 place-content-center gap-1 border">
                    <div className="size-1 bg-red-500"></div>
                    <div className="size-1 bg-red-500"></div>
                </div>

                <div className="flex size-16 flex-wrap place-content-center gap-1 border">
                    <div className="h-1 w-full bg-red-500"></div>
                    <div className="h-1 w-full bg-red-500"></div>
                </div>
            </section>

            <section>
                <h1>place-items</h1>
                <div className="grid h-20 place-items-center gap-1 bg-slate-100">
                    <div className="size-1 bg-red-500"></div>
                    <div className="size-1 bg-red-500"></div>
                    <div className="size-1 bg-red-500"></div>
                </div>
            </section>

            <section>
                <h1>place-self</h1>
                <div className="flex h-20 gap-1 bg-slate-100">
                    <div className="size-5 bg-red-500"></div>
                    <div className="size-5 place-self-center bg-red-500"></div>
                    <div className="size-5 bg-red-500"></div>
                </div>

                <div className="grid h-20 grid-cols-3 gap-1 bg-slate-300">
                    <div className="size-5 bg-red-500"></div>
                    <div className="size-5 place-self-end bg-red-500"></div>
                    <div className="size-5 bg-red-500"></div>
                </div>
            </section>

        </div>

    );
};