import { useState, useEffect } from 'react';

let globalStatus = false;
type ListenerFunction = (status: boolean) => void;

let listeners: ListenerFunction[] = [];

export default function useModalStore() {
    const setModalStatus = useState<boolean>(globalStatus)[1];

    const toggleModalVisibility = (status: boolean) => {
        globalStatus = status;
        for (const listener of listeners) {
            listener(globalStatus);
        }
    }

    useEffect(() => {
        listeners.push(setModalStatus);
        return () => {
            listeners = listeners.filter((li) => li !== setModalStatus);
        };
    }, [ setModalStatus ]);


    return { isModalOpen: globalStatus, toggleModalVisibility }
}