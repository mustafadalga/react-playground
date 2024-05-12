import { createContext, memo, useCallback, useContext, useMemo, useState } from "react";
import { isEqual } from "lodash";

const FormContext = createContext();
const FormUpdateContext = createContext();

const initialForm = {
    id: 1,
    text: "",
}
const init=[
    { id: 1, text: "Image 1" },
    { id: 2, text: "Image 2" },
    { id: 3, text: "Image 3" },
    { id: 4, text: "Image 4" },
    { id: 5, text: "Image 5" },
]

const AddForm = memo(function AddForm() {
    const { addForm } = useContext(FormUpdateContext);
    return (
        <button onClick={addForm}>add form</button>
    )
})

export default function V3() {
    return (
        <div>
            <FormProvider>
                <AddForm/>
                <Forms/>
            </FormProvider>
        </div>
    )
}

function FormProvider({ children }) {
    const [ forms, setForms ] = useState(init)

    const addForm = useCallback(() => {
        setForms(forms => [...forms, {
            ...initialForm,
            id: forms.length + 1
        }]);
    }, []);


    const updateForm = useCallback((id, newFormData) => {
        setForms(currentForms => currentForms.map(form =>
            form.id === id ? { ...form, ...newFormData } : form
        ));
    }, []);

    const providerValue = useMemo(() => ({
        addForm, updateForm
    }), [addForm, updateForm]);

    return (
        <FormContext.Provider value={forms}>
            <FormUpdateContext.Provider value={providerValue}>
                {children}
            </FormUpdateContext.Provider>
        </FormContext.Provider>
    )
}

const Test=memo(function Test(){
    return null;
})

const Form = memo(function Form({ form,children }) {
    const { updateForm } = useContext(FormUpdateContext);

    const onChange = useCallback((e) => {
        updateForm(form.id, { text: e.target.value });
    }, [ form.id, updateForm ]);


    return (
        <div className="p-10 border border-2 border-gray-300">
            {children}
            <input className="border border-1 border-gray-300" type="text" value={form.text} onChange={onChange}/>
        </div>
    )
});

const memoizedTest = <Test />;

function Forms() {
    const forms = useContext(FormContext);
    return (
        <div>
            {forms.map((f) => <Form key={f.id} children={memoizedTest} form={f}/>)}
        </div>
    )
}




