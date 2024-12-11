import { ReactNode, ReactElement, cloneElement, useState } from "react"

type IconProps = string;

type ButtonProps = {
    children: ReactNode;
    icon: ReactElement<IconProps>;
};


export const ButtonWithIconElement = ({
                                          children,
                                          icon,
                                      }: ButtonProps) => {

    const [ isHovered, setIsHovered ] = useState(false);

    const clonedIcon = cloneElement(icon, {
        fontSize: icon.props.fontSize || 'small',
        isHovered: isHovered,
    });

    return (
        <button onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}>
            {/*         // our icon, same as children, is just React element
            // which we can add directly to the render function*/}
            {clonedIcon}
            {children}
        </button>
    );
};