import { memo, useRef, useMemo, useEffect, useState, useReducer } from "react";
import {
    useFormContext,
    useWatch,
} from "react-hook-form";
import {
    MergeFormProvider,
    useMergeForm,
    useMergeFormUtils,
} from "./MergeFormProvider";
import RHFProvider from "./RHFProvider.tsx";
import { Form, ISelect } from "./types.ts";

function InputX() {
    const { control, register } = useFormContext<Form>()

    const renderCount = useRef(0);
    const x = useWatch({ name: "x", control });

    const someCalculator = useMemo(() => x.repeat(3), [ x ]);
    useEffect(() => {
        renderCount.current += 1;
        console.log("x", renderCount.current)
    })

    return (
        <fieldset className="grid border p-4">
            <legend>Input X Some calculator {someCalculator}</legend>
            <div>Render count: {renderCount.current}</div>
            <input {...register("x")} placeholder="Input X"/>
        </fieldset>
    );
}

function InputY() {
    const { control, register } = useFormContext<Form>()
    const renderCount = useRef(0);
    const y = useWatch({ name: "y", control });

    useEffect(() => {
        renderCount.current += 1;
    })

    return (
        <fieldset className="grid border p-4">
            <legend>Input Y {y}</legend>
            <div>Render count: {renderCount.current}</div>
            <input {...register("y")} placeholder="Input Y"/>
        </fieldset>
    );
}

function TodoByFormID() {
    const { formID } = useMergeForm();

    /**
     * Handle component by form id
     */
    console.log(formID);
// some other codes ....
    return <div>

    </div>;
}

const MemoInputX = memo(InputX);
const MemoInputY = memo(InputY);

function MainForm() {
    const { setFieldOptions } = useMergeFormUtils();
    const renderCount = useRef(0);
    const { control, register } = useFormContext<Form>()

    const [ y, z ] = useWatch({
        control,
        name: [ "y", "z" ],
    });
    const fieldOptions = useMemo<ISelect[]>(() => {
        if (y.length) {
            return Array.from({ length: y.length }, (_, index) => ({
                label: index.toString(),
                value: index + ". Item",
            }));
        }

        return [];
    }, [ y ]);

    useEffect(() => {
        renderCount.current += 1;
    })

    useEffect(() => {
        setFieldOptions(fieldOptions);
    }, [ fieldOptions, setFieldOptions ]);

    return (
        <section>
            <fieldset>
                <legend>Main Form Y Value:</legend>
                {y}
            </fieldset>
            <MemoInputX/>
            <MemoInputY/>

            <fieldset className="grid border p-4">
                <legend>Input Z {z}</legend>
                <div>Render count: {renderCount.current}</div>
                <input {...register("z")} placeholder="Input Z"/>
            </fieldset>

            <TodoByFormID/>
        </section>
    );
}

function reducer(state, action) {
    console.log("reducer action", action);
    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1
        };
    }
    throw Error('Unknown action.');
}

export default function App() {
    const formID = 1;
    const form: Form = {
        x: "",
        y: "",
        z: "",
    };


    const [state, dispatch] = useReducer(reducer, { age: 42 });


    return (
        <RHFProvider initialForm={form}>
            <MergeFormProvider initialFormID={formID}>
                <MainForm/>
            </MergeFormProvider>
        </RHFProvider>
    );
}
