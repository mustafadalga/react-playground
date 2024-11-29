import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "./types.ts";

interface Props {
    children: ReactNode;
    initialForm: Form
}

export default function RHFProvider({ children, initialForm }: Props) {
    const form = useForm<Form>({
        defaultValues: initialForm,
    })
    return (
        <FormProvider {...form}>
            {children}
        </FormProvider>
    )
}