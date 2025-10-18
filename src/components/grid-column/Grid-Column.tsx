import "./style.css"
import "@/tailwind.css"

export default function GridColumn() {
    return (
        <section>
            <div className="m-10">
                <div className="grid grid-cols-3 border">
                    <div className="col-start-2 h-2 bg-red-500"></div>
                    <div className="h-2 bg-red-500"></div>
                </div>
            </div>

            <div className="m-10">
                <div className="grid w-80 grid-cols-6 border">
                    <div className="col-start-2 col-end-6 bg-amber-400 p-2"></div>
                    <div className="bg-red-500 p-2"></div>
                    <div className="bg-red-500 p-2"></div>
                    <div className="bg-red-500 p-2"></div>
                </div>
            </div>

            <div className="m-10">
                <div className="grid w-80 grid-cols-6 border">
                    <div className="bg-amber-400 p-2" style={{ gridColumnStart: "span 5" }}></div>
                    <div className="bg-red-500 p-2"></div>
                    <div className="bg-red-500 p-2"></div>
                    <div className="bg-red-500 p-2"></div>
                </div>
            </div>

            <div className="m-10">
                <div className="grid w-80 grid-cols-6 border">
                    <div className="col-start-2 bg-amber-400 p-2" style={{ gridColumnEnd: "span 4" }}></div>
                    <div className="bg-red-500 p-2"></div>
                    <div className="bg-red-500 p-2"></div>
                    <div className="bg-red-500 p-2"></div>
                </div>
            </div>

        </section>
    );
};