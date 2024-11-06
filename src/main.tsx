import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter, Link, Outlet,
    RouterProvider,
} from "react-router-dom";

// Sayfa Bileşenleri
const Home = () => <h1>Ana Sayfa</h1>;
const About = () => <h1>Hakkında</h1>;
const Contact = () => <h1>İletişim</h1>;

const Layout = () => {
    return (
        <div style={{ display: 'flex' }}>
            {/* Sabit Sidebar */}
            <nav style={{ width: '200px', padding: '10px', borderRight: '1px solid #ddd' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><Link to="/">Ana Sayfa</Link></li>
                    <li><Link to="/about">Hakkında</Link></li>
                    <li><Link to="/contact">İletişim</Link></li>
                </ul>
            </nav>

            {/* Sayfa İçeriği */}
            <div style={{ marginLeft: '20px', flex: 1 }}>xxx
                <Outlet /> {/* Rotalara göre içerik burada değişecek */}
            </div>
        </div>
    );
};

// Router Yapılandırması
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Layout bileşeni ana element olarak kullanıldı
        children: [
            { path: '/', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
        ],
    },
]);
// Uygulamanın Render Edilmesi
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
