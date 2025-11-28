
import { useState, useCallback } from "react";

export function useAnimatedToggle() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggle = useCallback(() => {
        setIsOpen(prev => !prev);
        setIsAnimating(true);
    }, []);

    return { isOpen, isAnimating, setIsAnimating, toggle };
}
