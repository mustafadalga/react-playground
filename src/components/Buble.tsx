import React, { forwardRef } from "react";

const IMAGE_URL = "https://loremflickr.com/120/120/dog";

const Bubble = forwardRef(({ text, id }, ref) => (
        <div className="grid place-items-center gap-4 w-32" ref={ref}>
            <img
                className="w-3/4 rounded-full"
                src={`${IMAGE_URL}?random=${id}`}/>
            <span>{text}</span>
        </div>
    ))

export default Bubble;
