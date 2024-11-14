import React, { memo,useRef } from 'react';
import { useForm, useFormContext, useWatch, FormProvider } from 'react-hook-form';


function InputCount() {
    const { setValue, control } = useFormContext();
    const renderCount = useRef(0);
    const count = useWatch({ name: 'count', control, exact: true })

    renderCount.current += 1;

    return (
        <div className="grid border p-4">
            <div>Render count: {renderCount.current}</div>
            <input type="text" placeholder="enter addresss" defaultValue={count}
                   onChange={e => setValue("count", e.target.value)}/>
        </div>
    )
}
const MemoInputCount=memo(InputCount)


const DemoComponent= () => {
    // Access the form context to use its control property

    const { control,setValue } = useFormContext();
    console.log("DemoComponent",control);
    const yValue =useWatch({ name: 'y', control,exact:true    })

    // console.log('DemoComponent re-rendered', yValue);

    return <div>Y Value: {yValue}


    <MemoInputCount/>
    </div>;
};
const MemoDemoComponent=memo(DemoComponent)

const MainForm: React.FC = () => {
    const methods= useForm();

    return (
        <FormProvider {...methods}>
            <input  {...methods.register("x")} placeholder="Input X"/>
            <input  {...methods.register("y")} placeholder="Input y"/>
            <DemoComponent/>
            <button type="submit">Submit</button>
        </FormProvider>
    );
};

export default MainForm