import { useActionState } from "react";

async function fakeServerUpdate(name) {
    await new Promise((r) => setTimeout(r, 800)); // simulate delay
    if (name.trim() === "") return "Name is required.";
    return null;
}

function ChangeName() {
    const [error, submitAction, isPending] = useActionState(
        async (prevState, formData) => {
            const name = formData.get("name");
            const error = await fakeServerUpdate(name);
            if (error) return error;
            alert(`Name changed to: ${name}`);
            return null;
        },
        null
    );

    return (
        <form action={submitAction}>
            <input type="text" name="name" placeholder="Enter name" />
            <button type="submit" disabled={isPending}>
                {isPending ? "Updating..." : "Update"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}

export default ChangeName;
