import promisify from "@/algorithms/useDebounce.ts";
import {
    ComponentType,
    JSX,
    ReactElement,
    useRef,
    createElement,
    ComponentProps,
    ComponentPropsWithRef,
    forwardRef
} from "react";

const Input2 = forwardRef(function Input(props: ComponentPropsWithRef<"input">, ref) {
    return <input {...props} ref={ref}/>
})

function Input(props: ComponentPropsWithRef<"input">) {
    return <input {...props} />
}

const HTML: JSX.Element = <div>55</div>
const V1: ReactElement = <div>55</div>
console.log(V1)
const HTM2L = (): JSX.Element => <div>55</div>
const elem: ReactElement<{ className: string }> = <div className="bg-red-300">1</div>;
const Hasan = (props: { message: string }) => <div>{props.message}</div>;
const element: ReactElement = createElement('div', { className: 'test' }, 'Hello');
console.log(element)
export default function App() {
    const anotherElem: ReactElement = <div></div>// <Comp message="hi"/>; // ReactElement can be passed around
    const ref = useRef(null)
    return (
        <div>
            {V1}
            {anotherElem}
            {elem}
            {HTML}
            {HTM2L()}
            <HTM2L/>
            <Child Comp={Hasan} renderedElement={HTML} creating={<Hasan message={"olustu"}/>}/>
            <Button className="bg-amber-500 size-20" onClick={() => ref.current?.focus()}>
                btn
            </Button>
            <Input placeholder={"ekle"} ref={ref}/>
        </div>
    );
}


function Child({ Comp, renderedElement, creating }: {
    Comp: ComponentType<{ message: string }>,
    renderedElement: ReactElement,
    creating: ReactElement<{ message: string }>
}) {
    return (
        <div>
            <Comp message={"hasan"}/>
            {renderedElement}
            {creating}
        </div>
    )
}

function Button(props: ComponentProps<"button">) {
    return <button {...props}/>
}
