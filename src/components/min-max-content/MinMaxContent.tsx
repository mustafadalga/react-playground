export default function MinMaxContent() {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "min-content", border: "1px solid red", padding: 5 }}>
                    This is a very long sentence that needs to wrap.
                </div>
                <div
                    style={{
                        width: 100,
                        border: "1px solid blue",
                        padding: 5,
                        marginLeft: 10
                    }}
                >
                    Fixed width item.
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "max-content", border: "1px solid red", padding: 5 }}>
                    This is a very long
                </div>
                <div
                    style={{
                        width: 100,
                        border: "1px solid blue",
                        padding: 5,
                        marginLeft: 10
                    }}
                >
                    Fixed width item.
                </div>
            </div>
            <div style={{ width: "max-content", border: "1px solid red" }}>
                This is some long text
            </div>
        </div>

    );
};