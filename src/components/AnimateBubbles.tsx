import {
    useEffect,
    Children,
    useState,
    useLayoutEffect,
    ReactNode,
    ReactElement,
    RefObject,
} from "react";
import usePrevious from "@/hooks/usePrevious.ts";

interface ChildComponent extends ReactElement {
    ref: RefObject<HTMLElement>;
}

interface BoundingBox {
    [key: number]: DOMRect
}

const calculateBoundingBoxes = (children: ReactNode): BoundingBox => {
    const boundingBoxes: BoundingBox = {};

    Children.forEach(children, (child) => {
        const childComponent: ChildComponent = child as ChildComponent
        const domNode = childComponent.ref.current!;
        boundingBoxes[childComponent.key as unknown as number] = domNode.getBoundingClientRect();
    });

    return boundingBoxes;
};


const AnimateBubbles = ({ children }: { children: ReactNode }) => {
    const [ boundingBox, setBoundingBox ] = useState<BoundingBox>({});
    const [ prevBoundingBox, setPrevBoundingBox ] = useState<BoundingBox>({});
    const prevChildren = usePrevious<ReactNode>(children);

    useLayoutEffect(() => {
        const newBoundingBox = calculateBoundingBoxes(children);
        setBoundingBox(newBoundingBox);
    }, [ children ]);

    useLayoutEffect(() => {
        const prevBoundingBox = calculateBoundingBoxes(prevChildren);
        setPrevBoundingBox(prevBoundingBox);
    }, [ prevChildren ]);

    useEffect(() => {
        const hasPrevBoundingBox = !!Object.keys(prevBoundingBox).length;
        if (!hasPrevBoundingBox) return;

        Children.forEach(children, child => {

            const childComponent: ChildComponent = child as ChildComponent
            const domNode = childComponent.ref.current;
            if (!domNode) return

            const firstBox = prevBoundingBox[childComponent.key as unknown as number];
            const lastBox = boundingBox[childComponent.key as unknown as number];
            if (firstBox && lastBox) {
                const deltaX = firstBox.left - lastBox.left;
                const deltaY = firstBox.top - lastBox.top;

                if (deltaX || deltaY) {

                    requestAnimationFrame(() => {

                        domNode.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                        domNode.style.transition = "transform 0s";

                        requestAnimationFrame(() => {
                            // After the previous frame, remove
                            // the transistion to play the animation
                            domNode.style.transform = "";
                            domNode.style.transition = "transform 500ms";
                        });

                    })
                }
            } else if (lastBox) {
                requestAnimationFrame(() => {
                    domNode.style.opacity = "0";
                    domNode.style.transform = "scale(0)";
                    requestAnimationFrame(() => {
                        domNode.style.opacity = "1";
                        domNode.style.transform = "scale(1)";
                        domNode.style.transition = "opacity 500ms, transform 500ms";
                    });
                });
            }
        })

    }, [ boundingBox, prevBoundingBox, children ])

    return children;
};

export default AnimateBubbles;