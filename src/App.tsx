import Drawer from "./components/Drawer.tsx";
import { useAnimatedToggle } from "./hooks/useAnimatedToggle";

function App() {
    const { isOpen, isAnimating, setIsAnimating, toggle } = useAnimatedToggle();

    return (
        <div className='m-4'>
            <button onClick={toggle}>toggle drawer {isOpen}</button>

            {(isOpen || isAnimating) && (
                <Drawer isOpen={isOpen} setIsAnimating={setIsAnimating} />
            )}
        </div>
    )
}

export default App
