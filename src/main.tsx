import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "@/tailwind.css"
import FlexGrow from "@/components/flex-grow/FlexGrow.tsx";
import FlexShrink from "@/components/flex-shrink/FlexShrink.tsx";
import MinMaxContent from "@/components/min-max-content/MinMaxContent.tsx";
import Justify from "@/components/justify/Justify.tsx";
import Align from "@/components/align/Align.tsx";
import GridColumn from "@/components/grid-column/Grid-Column.tsx";

const Home = () => {
    return (<div style={{margin:10}}>

        {/*<FlexGrow/>*/}
        {/*<FlexShrink/>*/}
        {/*<MinMaxContent/>*/}
        {/*<Justify/>*/}
        {/*<Align/>*/}
        <GridColumn/>

    </div>)
}


// Router Yapılandırması
const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { path: '/', element: <Home/> },
        ],
    },
]);
// Uygulamanın Render Edilmesi
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
