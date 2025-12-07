
import { useState, useCallback } from 'react';

export function useSet(initialState) {
    const [set, setSet] = useState(new Set(initialState));

    const add = useCallback((item) => {
        setSet(prev => new Set(prev).add(item));
    }, []);

    const remove = useCallback((item) => {
        setSet(prev => {
            const next = new Set(prev);
            next.delete(item);
            return next;
        });
    }, []);

    const toggle = useCallback((item) => {
        setSet(prev => {
            const next = new Set(prev);
            if (next.has(item)) {
                next.delete(item);
            } else {
                next.add(item);
            }
            return next;
        });
    }, []);

    const reset = useCallback(() => {
        setSet(new Set(initialState));
    }, [initialState]);

    const clear = useCallback(() => {
        setSet(new Set());
    }, []);

    return { set, add, remove, toggle, reset, clear };
}
