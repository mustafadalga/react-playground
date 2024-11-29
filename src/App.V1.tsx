import { lazy, Suspense } from 'react';

const List = lazy(() => import("./List"));

export default function Page() {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <List/>
            </Suspense>
        </>
    );
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
}

