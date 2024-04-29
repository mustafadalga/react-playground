import { ForwardedRef, forwardRef } from "react";
import { Movie } from "@/types.ts";

interface Props {
    movie: Movie
}

const Bubble = forwardRef(({ movie }: Props, ref:ForwardedRef<HTMLDivElement>) => (
    <div className="max-w-sm rounded overflow-hidden bg-indigo-200 shadow-lg" ref={ref}>
        <img src={movie.image} alt="Random Image"/>

        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{movie.title}</div>
            <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap p-4">
            {movie.kinds.map(kind => <span
                key={kind}
                className="bg-indigo-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{kind}</span>)}
        </div>
    </div>
))

export default Bubble;
