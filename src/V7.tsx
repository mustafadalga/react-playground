import { useBearFamilyMealsStore } from "./store.ts";
import { useEffect, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
function BearNames() {
    const names = useBearFamilyMealsStore(useShallow(state1 => Object.keys(state1)));
console.log("re")

    return <div>{names.join(', ')}</div>;
}
const meals = [
    'A tiny, little, wee bowl',
    'A small, petite, tiny pot',
    'A wee, itty-bitty, small bowl',
    'A little, petite, tiny dish',
    'A tiny, small, wee vessel',
    'A small, little, wee cauldron',
    'A little, tiny, small cup',
    'A wee, small, little jar',
    'A tiny, wee, small pan',
    'A small, wee, little crock',
]

function UpdateBabyBearMeal() {
    useEffect(() => {
        const updateMeal = () => {
            const newMeal = meals[Math.floor(Math.random() * meals.length)];
            useBearFamilyMealsStore.setState({ tinyBear: newMeal });
        };

        const timer = setInterval(updateMeal, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [])

    return null
}


export default function V7() {
    return (
        <div className="grid content-baseline border border-purple-700 p-4">
            <UpdateBabyBearMeal/>
            <BearNames/>
        </div>
    )
}
