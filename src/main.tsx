import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter, Link, Outlet,
    RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";



// Sayfa Bileşenleri
const Teams = () => (
    <div>
        <h1>Takımlar</h1>
        <Link to="/teams">teams</Link>
        <Link to="/teams/1">detail</Link>
        {/* Burada Outlet, alt rotaların içeriğini render edecek */}
        <Outlet />
    </div>
);

const TeamsIndex = () => {
    useEffect(() => {
console.log(33)
        return () => {
            console.log("...")
        }
    }, [])
    return (
        <div>
            <h2>Takımlar Listesi</h2>
            <p>Burada tüm takımların genel listesi gösterilecek.</p>
        </div>
    );
}

const Team = () => (
    <div>
        <h2>Takım Detayı</h2>
        <p>Belirli bir takımın detaylı bilgisi burada gösterilecek.</p>
    </div>
);

// Router Yapılandırması
const router = createBrowserRouter([
    {
        path: '/teams',
        element: <Teams />, // Takımlar ana bileşeni
        children: [
            {
                index: true, // Varsayılan içerik
                element: <TeamsIndex />, // Varsayılan olarak Takımlar Listesi gösterilir
            },
            {
                path: ':teamId', // Dinamik rota, örneğin /teams/123
                element: <Team />, // Belirli bir takımın detayları gösterilir
            },
        ],
    },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
