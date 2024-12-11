import { ElementType, ReactElement, ReactNode, useState } from "react";

type IconProps = string;

type ButtonProps = {
    children: ReactNode;
    renderIcon: () => ReactElement;
};

export const ButtonWithIconRenderFunc = ({
                                             children,
                                             renderIcon,
                                         }: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    // getting the Element from the function
    const icon = renderIcon({
        fontSize: 'small',
        isHovered: isHovered,
    });
    return (
        <button      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)} >
            {/*// adding element like any other element here*/}
            {icon}
            {children}
        </button>
    );
};