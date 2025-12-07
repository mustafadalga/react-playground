import { useCallback, useEffect, useRef, useState } from "react";

function useStopWatch() {
    const [ elapsedTime, setElapsedTime ] = useState(0)
    const [ isRunning, setIsRunning ] = useState(false)
    const startTimeRef = useRef<number | null>(null)
    const animationFrameRef = useRef<number | null>(null)

    const updateTime = useCallback(() => {
        if (startTimeRef.current) {
            const now = performance.now()
            setElapsedTime(now - startTimeRef.current)
            animationFrameRef.current = requestAnimationFrame(updateTime)
        }
    }, [])

    const start = () => {
        if (!isRunning) {
            startTimeRef.current = performance.now() - elapsedTime
            setIsRunning(true)
        }
    }

    const pause = () => {
        if (isRunning && animationFrameRef.current != null) {
            cancelAnimationFrame(animationFrameRef.current)
            animationFrameRef.current = null
            setIsRunning(false)
        }
    }

    const reset = () => {
        if (animationFrameRef.current != null) {
            cancelAnimationFrame(animationFrameRef.current)
            animationFrameRef.current = null
        }
        setElapsedTime(0)
        setIsRunning(false)
        startTimeRef.current = null
    }

    useEffect(() => {
        if (isRunning) {
            animationFrameRef.current = requestAnimationFrame(updateTime)
        }

        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        }
    }, [ isRunning, updateTime ])

    return { elapsedTime, isRunning, start, pause, reset };

}

function formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(centiseconds).padStart(2, "0")}`;
}


export default function StopWatchContainer() {
    const { elapsedTime, isRunning, start, pause, reset } = useStopWatch();

    return (
        <div className="inline-flex flex-col gap-2">
            <div
                className="inline-flex border p-4 rounded-sm font-mono text-3xl tabular-nums"
                role="timer"
                aria-live="off"
                aria-atomic="true"
            >
                {formatTime(elapsedTime)}
            </div>
            <div aria-label="Stopwatch controls">
                <button
                    onClick={isRunning ? pause : start}
                    aria-label={isRunning ? "Pause stopwatch" : "Start stopwatch"}
                    className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button
                    onClick={reset}
                    aria-label="Reset stopwatch to zero"
                    className="px-4 py-2 bg-gray-500 text-white rounded-sm hover:bg-gray-600 focus:outline-hidden focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
