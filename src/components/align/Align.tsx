import "@/tailwind.css"

export default function Align() {
    return (
        <div>
            * **align-content** → moves all rows or columns together inside the container when there’s extra space.
            * **align-items** → controls how all items line up vertically individually (in a row layout) or horizontally (in a column layout).if flex direction is row , justify-content behaviour like align-items and align-items behaviour like justify-content
            * **align-self** → controls how one specific item aligns on the cross axis, overriding align-items.

            <section>
                <h1>align-content</h1>
                <div className="grid h-16 content-center gap-1 border">
                    <div className="size-3 bg-red-500"></div>
                    <div className="size-3 bg-red-500"></div>
                </div>

                <div className="flex size-16 flex-wrap content-end gap-1 border">
                    <div className="h-3 w-full bg-red-500"></div>
                    <div className="h-3 w-full bg-red-500"></div>
                </div>
            </section>

            <section>
                <h1>align-items</h1>
                <div className="flex h-20 items-center gap-1 bg-slate-100">
                    <div className="size-5 bg-red-500"></div>
                    <div className="size-5 bg-red-500"></div>
                    <div className="size-5 bg-red-500"></div>
                </div>

                <div className="grid h-20 grid-cols-3 items-center gap-1 bg-slate-300">
                    <div className="size-5 bg-red-500"></div>
                    <div className="size-5 bg-red-500"></div>
                    <div className="size-5 bg-red-500"></div>
                </div>
            </section>

            <section>
                <h1>align-self</h1>
                <div className="flex h-20 gap-1 bg-slate-100">
                    <div className="size-5 bg-red-500"></div>
                    <div className="size-5 self-center bg-red-500"></div>
                    <div className="size-5 bg-red-500"></div>
                </div>

                <div className="grid h-20 grid-cols-3 gap-1 bg-slate-300">
                    <div className="size-5 bg-red-500"></div>
                    <div className="size-5 self-center bg-red-500"></div>
                    <div className="size-5 bg-red-500"></div>
                </div>
            </section>
        </div>

    );
};