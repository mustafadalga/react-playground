import { useCallback, useState } from "react";

export enum DrawerState {
    Closed = 'closed',
    Opening = 'opening',
    Open = 'open',
    Closing = 'closing'
}

export function useAnimatedToggle() {
    const [state, setState] = useState<DrawerState>(DrawerState.Closed);

    const toggle = useCallback(() => {
        setState(s =>
            s === DrawerState.Open ? DrawerState.Closing : DrawerState.Opening
        );
    }, []);

    const onEnd = useCallback(() => {
        setState(s =>
            s === DrawerState.Opening ? DrawerState.Open : DrawerState.Closed
        );
    }, []);

    return {
        isOpen: state === DrawerState.Open || state === DrawerState.Opening,
        shouldRender: state !== DrawerState.Closed,
        toggle,
        onEnd
    };
}
