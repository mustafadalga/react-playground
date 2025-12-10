import { usersStore } from "@/stores/useUsers.ts";

function UserList() {
    const users = usersStore.use((s) => s.users);

    return (
        <div>
            <ul>
                {users.map(u => <li key={u}>{u}</li>)}
            </ul>
        </div>
    );
}


function AddUser() {
    console.log('hey')
    return (
        <button onClick={() => {
            usersStore.set(prev => ({users: [ ...prev.users, Math.random().toString() ] }))
        }
        }>
            Add User
        </button>
    );
}

export default function DemoV2() {
    return (
        <div className='border'>
            <AddUser/>
            <UserList/>
        </div>
    );
}
