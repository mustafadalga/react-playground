import { useEffect, useMemo, useCallback, useReducer } from 'react'

async function getUsersByPage(page) {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=10&page=${page}`);
        const json = await response.json();
        const userData = json.results.map(row => ({
            email: row.email,
            first: row.name.first,
            last: row.name.last,
        }))
        return userData;

    } catch (error) {
        console.log(error)
        return []
    }
}

const Sort = {
    ASC: "ASC",
    DESC: "DESC"
}

const initialState = {
    search: "",
    sort: "",
    lastPageNumber: 1,
    users: []
}

enum Actions {
    AppendUsers,
    SetSearch, SetSort,
    IncrementPage
}

function reducer(state, action) {
    switch (action.type) {
        case Actions.AppendUsers:
            return {
                ...state,
                users: [ ...state.users, ...action.payload ]
            }
        case Actions.SetSearch:
            return {
                ...state,
                search: action.payload
            }
        case Actions.IncrementPage:
            return {
                ...state,
                lastPageNumber: state.lastPageNumber + 1
            }
        case Actions.SetSort:
            return {
                ...state,
                sort: action.payload
            }
    }

}

const App = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    const filteredUsers = useMemo(() => {
        const searchText = state.search.toLowerCase().trim();
        console.log(state.sort, 33)
        const filteredUserList = searchText.length ? state.users.filter(user => user.first.toLowerCase().includes(searchText) || user.last.toLowerCase().includes(searchText)) : state.users;

        return filteredUserList.sort((firstUser, secondUser) => {

            if (state.sort == Sort.ASC) {
                return firstUser.first.localeCompare(secondUser.first)
            } else if (state.sort == Sort.DESC) {
                return secondUser.first.localeCompare(firstUser.first)
            }

            return 0
        })

    }, [ state.search, state.sort, state.users ])

    const handleMoreUsers = useCallback(async (page) => {
        const data = await getUsersByPage(page);
        dispatch({ type: Actions.AppendUsers, payload: data })
    }, [ dispatch ])


    const handleScroll = useCallback((e) => {
        const THRESHOLD = 1;
        const bottom = e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight - THRESHOLD;
        if (bottom) {
            dispatch({ type: Actions.IncrementPage })
            handleMoreUsers(state.lastPageNumber + 1);
        }
    }, [ handleMoreUsers, state.lastPageNumber ])


    useEffect(() => {
        handleMoreUsers(state.lastPageNumber)
    }, [ handleMoreUsers ])


    return (
        <section onScroll={handleScroll} style={{ border: "0px solid black", overflowY: 'auto', height: "400px" }}>
            <input onChange={e => dispatch({ type: Actions.SetSearch, payload: e.target.value })} value={state.search}/>

            <select onChange={e => dispatch({ type: Actions.SetSort, payload: e.target.value })}>
                {Object.values(Sort).map(item => (<option value={item}> {item}</option>))}
            </select>


            <ul>
                {filteredUsers.map(user => (
                    <li key={user.email}>
                        <span>{user.first} {user.last}</span>
                        <span> {user.email} </span>
                    </li>
                ))}

            </ul>

        </section>
    )
}


export default App