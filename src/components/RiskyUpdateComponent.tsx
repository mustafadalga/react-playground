import React, { useState, useEffect } from 'react';

function ChildComponent({ updateParentState }) {
    // This will attempt to update parent's state during rendering, which is incorrect
    updateParentState(10);
    console.log(4)
    return <div>Child Component</div>;
}

function ParentComponent() {
    const [parentState, setParentState] = useState(0);
console.log(2)
    return (
        <div>
            Parent State: {parentState}
            {/* Passing the setParentState function to the child, which is not recommended */}
            <ChildComponent updateParentState={setParentState} />
        </div>
    );
}

export default ParentComponent;
