import { useEffect, useState } from "react";

interface Time {
    hours: string,
    minutes: string,
    seconds: string
}

function generateSegment(date: Date): Time {
    return {
        hours: date.getHours().toString().padStart(2, "0"),
        minutes: date.getMinutes().toString().padStart(2, "0"),
        seconds: date.getSeconds().toString().padStart(2, "0"),
    }
}

export default function DigitalClock() {
    const [ time, setTime ] = useState<Date>(new Date())

    const formattedTime = generateSegment(time)

    useEffect(() => {
        const id = setInterval(() => setTime(new Date()), 1000)

        return () => clearInterval(id)
    }, [])

    return <section role="timer" className="inline-flex rounded-md bg-gray-200 p-2 font-['Orbitron',sans-serif]">
        <div
            className="py-2 text-5xl w-[8ch] flex items-center justify-center outline-0 transition-colors bg-black rounded-sm focus:ring-3 focus:ring-blue-500"
            aria-live="polite"
            aria-label={`Current time is ${formattedTime.hours}:${formattedTime.minutes}:${formattedTime.seconds}`}
            tabIndex={0}>
            {(Object.keys(formattedTime) as (keyof Time)[]).map((segment) => <Segment key={segment}
                                                                                      value={formattedTime[segment]}
                                                                                      segment={segment}/>)}
        </div>
    </section>
}

function Segment({ value, segment }: { value: string, segment: keyof Time }) {
    return (
        <div className=" text-white font-semibold">
            {value}
            {segment !== 'seconds' ? ':' : ''}
        </div>
    );
}