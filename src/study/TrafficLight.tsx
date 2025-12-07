import { ComponentProps, useEffect, useRef, useState } from "react";

const config = {
    red: {
        duration: 4000,
        next: "yellow",
        className: "bg-red-500"
    },
    yellow: {
        duration: 500,
        next: "green",
        className: "bg-yellow-500"
    },
    green: {
        duration: 3000,
        next: "red",
        className: "bg-green-500"
    }
}

export default function TrafficLight2() {
    const [ active, setActive ] = useState<keyof typeof config>("red")
    useEffect(() => {

        const id = setTimeout(() => setActive(config[active].next as keyof typeof config), config[active].duration)

        return () => clearTimeout(id)
    }, [ active ])
    return (
        <div className="grid grid-cols-3 bg-black w-48 h-16 rounded-xl p-2 gap-2">
            {Object.keys(config).map(color => <Light key={color}
                                                     className={active === color ? config[color].className : "bg-gray-700"}/>)}

        </div>
    );
}

function Light({ className }: ComponentProps<"div">) {
    return <div className={`size-12 rounded-full ${className}`}/>
}

function TrafficLight() {
    const [ colors, setColors ] = useState([ "", "", "" ])
    const interval = useRef<ReturnType<typeof setInterval>>(null)
    console.log(3)
    useEffect(() => {
        if (interval.current) return

        const start = () => {
            setColors([ "bg-red-500", "", "" ])
            setTimeout(() => setColors([ "", "bg-yellow-500", "" ]), 4000)
            setTimeout(() => setColors([ "", "", "bg-lime-500" ]), 4500)
        }

        start()

        interval.current = setInterval(start, 7500)

    }, [])
    return (
        <div className="grid grid-cols-3 bg-black w-48 h-16 rounded-xl p-2 gap-2">

            {colors.map((row, index) => <div key={index}
                                             className={`size-12 rounded-full ${row ? row : "bg-gray-700"}`}></div>)}
            {/*<div className="size-12 rounded-full bg-red-500"></div>*/}
            {/*<div className="size-12 rounded-full bg-red-500"></div>*/}
            {/*<div className="size-12 rounded-full bg-gray-700"></div>*/}

        </div>
    );
};