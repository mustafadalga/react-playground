import { ElementType, ReactNode, useState } from "react"

type IconProps = string;

type ButtonProps = {
    children: ReactNode;
    Icon: ElementType
};

export const ButtonWithIconComponent = ({
                                            children,
                                            Icon,
                                        }: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)} >
            {/*    // our button is a component // its name starts with a
            capital letter to signal that // so we can just render
            it here as any other component*/}
            <Icon  fontSize="small"  isHovered={isHovered}  />
            {children}
        </button>
    );
};