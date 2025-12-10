import DemoV1 from "@/components/v1/Demo.tsx";
import DemoV2 from "@/components/v2/Demo.tsx";



export default function App() {
    return (
        <div className='grid p-10 gap-10'>
            <DemoV1/>
            <DemoV2/>
        </div>
    );
}

