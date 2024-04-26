import React, { useEffect, Children, useState, useLayoutEffect } from "react";
import usePrevious from "@/hooks/usePrevious.ts";


const calculateBoundingBoxes = children => {
    const boundingBoxes = {};

    Children.forEach(children, child => {
        const domNode = child.ref.current;
        const nodeBoundingBox = domNode.getBoundingClientRect();

        boundingBoxes[child.key] = nodeBoundingBox;
    });

    return boundingBoxes;
};


const AnimateBubbles = ({ children }) => {
    const [boundingBox, setBoundingBox] = useState({});
    const [prevBoundingBox, setPrevBoundingBox] = useState({});
    const prevChildren = usePrevious(children);

    useLayoutEffect(() => {
        const newBoundingBox = calculateBoundingBoxes(children);
        setBoundingBox(newBoundingBox);
    }, [children]);

    useLayoutEffect(() => {
        const prevBoundingBox = calculateBoundingBoxes(prevChildren);
         setPrevBoundingBox(prevBoundingBox);
    }, [prevChildren]);

    useEffect(() => {
        const hasPrevBoundingBox = !!Object.keys(prevBoundingBox).length;
        if (!hasPrevBoundingBox) return;

        Children.forEach(children, child => {

            const domNode = child.ref.current;
            const firstBox = prevBoundingBox[child.key];
            const lastBox = boundingBox[child.key];
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

        })


    }, [ boundingBox, prevBoundingBox, children ])


    return children;
};

export default AnimateBubbles;