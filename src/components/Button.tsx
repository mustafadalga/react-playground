import { ComponentPropsWithRef } from "react";

interface Props extends ComponentPropsWithRef<'button'> {
    isActive: boolean
}

export default function Button({ isActive, onClick, children }: Props) {
    return (
        <button className={isActive ? "active" : "normal"} onClick={onClick}>
            {children}
        </button>
    );
};