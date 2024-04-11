import { useSyncExternalStore } from 'react';

export function useOnlineStatus() {
    const isOnline = useSyncExternalStore(subscribe, getSnapshot,getServerSnapshot);
    return isOnline;
}

function getSnapshot() {
    return navigator.onLine;
}

function getServerSnapshot() {
    return true; // Always show "Online" for server-generated HTML
}

function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    };
}
