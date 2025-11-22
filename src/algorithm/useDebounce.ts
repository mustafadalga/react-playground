import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [ dimension, setDimension ] = useState({ height: 0, width: 0 })

    useEffect(() => {
        const calc = () => {
            setDimension({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener("resize", calc)
        return () => window.removeEventListener("resize", calc)

    }, [])

    return dimension
}