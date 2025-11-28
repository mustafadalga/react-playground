import Drawer from "./components/Drawer.tsx";
import { useAnimatedToggle } from "./hooks/useAnimatedToggle";

function App() {
    const { isOpen, shouldRender, onEnd,toggle } = useAnimatedToggle();

    return (
        <div className='m-4'>
            <button onClick={toggle}>toggle drawer {isOpen}</button>

            {shouldRender && <Drawer isOpen={isOpen} onEnd={onEnd} />}

        </div>
    )
}

export default App
