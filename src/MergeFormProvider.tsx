import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { ISelect } from "./types.ts";


export interface Props {
    children: ReactNode;
    initialFormID: number;
}

export interface IFormUtils {
    setFieldOptions: (fieldOptions: ISelect[]) => void;
}

export interface IFormData {
    fieldOptions: ISelect[];
    formID: number;
}

export const FormUtilsContext = createContext<IFormUtils | undefined>(
    undefined
);
export const FormDataContext = createContext<IFormData | undefined>(undefined);

export function MergeFormProvider({ children, initialFormID }: Props) {
    const [ formID, setFormID ] = useState<number>(initialFormID);
    const [ fieldOptions, setFieldOptions ] = useState<ISelect[]>([]);
    const formUtils = useMemo<IFormUtils>(
        () => ({
            setFieldOptions,
        }),
        [ setFieldOptions ]
    );
    const data = useMemo<IFormData>(
        () => ({
            fieldOptions,
            formID,
        }),
        [ fieldOptions, formID ]
    );

    useEffect(() => {
        setFormID(initialFormID);
    }, [ initialFormID ]);

    return (
        <FormUtilsContext.Provider value={formUtils}>
            <FormDataContext.Provider value={data}>
                {children}
            </FormDataContext.Provider>
        </FormUtilsContext.Provider>
    );
}

export function useMergeFormUtils() {
    const context = useContext(FormUtilsContext);
    if (!context) {
        throw new Error("useMergeFormUtils must be used within a FormUtilsContext");
    }
    return context;
}

export function useMergeForm() {
    const context = useContext(FormDataContext);
    if (!context) {
        throw new Error("useMergeForm must be used within a FormDataContext");
    }
    return context;
}
