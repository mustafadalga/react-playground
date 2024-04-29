import { createRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import AnimateBubbles from "@/components/AnimateBubbles.tsx";
import Buble from "@/components/Buble.tsx";
import { movies } from "@/data/movies.ts";
import Kinds from "@/components/Kinds.tsx";
import Input from "@/components/Input.tsx";

function App() {
    const filterOptionsRef = useRef<HTMLDivElement>(null!);
    const [ showFilter, setShowFilter ] = useState(true);
    const [ form, setForm ] = useState({
        title: "",
        kind: ""
    })

    const filteredMovies = useMemo(() => {
        return movies.filter((movie) => (!form.kind || (form.kind && movie.kinds.includes(form.kind))) && movie.title.toLowerCase().includes(form.title.toLowerCase()))
    }, [ form ]);

    const updateForm = useCallback((type: "title" | "kind", value: string) => {
        setForm({ ...form, [type]: value });
    }, [ form ]);

    useEffect(() => {
        const handleTransitionEnd = (event: AnimationEvent) => {
            if (event.animationName == 'fade-out-bck' && !showFilter) {
                filterOptionsRef.current.classList.add('hidden');
            }
        };

        const showFilterOptions = () => {
            filterOptionsRef.current.classList.remove('hidden', "fade-out-bck");
            filterOptionsRef.current.classList.add("fade-in-fwd");
        }

        const hideFilterOptions = () => {
            filterOptionsRef.current.classList.remove("fade-in-fwd");
            filterOptionsRef.current.classList.add("fade-out-bck");
        }

        filterOptionsRef.current.addEventListener("animationend", handleTransitionEnd);

        showFilter ? showFilterOptions() : hideFilterOptions();

        return () => filterOptionsRef.current.removeEventListener('animationend', handleTransitionEnd);
    }, [ showFilter ]);

    return (
        <main className="grid place-items-center gap-5 p-10">
            <button
                type="button"
                onClick={() => setShowFilter(prevState => !prevState)}
                className="text-indigo-500 bg-indigo-100 border border-solid border-indigo-300 px-5 py-1 rounded-lg
                ml-auto">
                {showFilter ? 'Hide' : 'Show'} Filter
            </button>

            <div
                ref={filterOptionsRef}
                className={`my-5 grid gap-5 place-items-end`}>
                <Kinds onSelect={kind => updateForm("kind", kind)}
                       onClear={() => updateForm("kind", "")}/>
                <Input input={form.title} setInput={title => updateForm("title", title)}/>
            </div>

            <div className="grid gap-4 grid-cols-5">
                <AnimateBubbles>
                    {filteredMovies.map((movie) => <Buble
                        key={movie.id}
                        ref={createRef()}
                        movie={movie}
                    />)}
                </AnimateBubbles>
            </div>
        </main>
    )
}

export default App
