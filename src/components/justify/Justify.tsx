import "./style.css"

export default function Justify() {
    return (
        <div>
            Fixed definitions:
            * justify-content → aligns all items as a group along the container’s main axis. (works in flex and grid)
            * justify-items → aligns each item individually inside its grid cell along the inline (row) axis. (grid only)
            * justify-self → aligns a single grid item inside its cell along the inline (row) axis. (grid only)

            <section>
                <h1>justify-content</h1>
                <div className="grid justify-center gap-2 border">
                    <div className="bg-red-500">01</div>
                    <div className="bg-red-500">01</div>
                    <div className="bg-red-500">01</div>
                    <div className="bg-red-500">01</div>
                </div>

                <div className="flex justify-center gap-2 border">
                    <div className="bg-red-500">01</div>
                    <div className="bg-red-500">01</div>
                    <div className="bg-red-500">01</div>
                </div>
            </section>

            <section>
                <h1>justify-self</h1>
                <div className="grid grid-cols-2 gap-1 bg-slate-100">
                    <div className="justify-self-end bg-red-500">A</div>
                    <div className="bg-red-500">B</div>
                </div>
            </section>

            <section>
                <h1>justify-items</h1>
                <div className="grid grid-cols-2 justify-items-center gap-1 bg-slate-100">
                    <div className="bg-red-500">A</div>
                    <div className="bg-red-500">B</div>
                    <div className="bg-red-500">c</div>
                    <div className="bg-red-500">d</div>
                </div>
            </section>

        </div>

    );
};