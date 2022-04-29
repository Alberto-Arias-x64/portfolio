import { createContext, useReducer } from "react"

const Context = createContext()

const initial_state = { active_item: '' }
const reducer = (state, action) => {
    switch (action.type) {
        case '@item/init_item':
            return{...state}
    
        default:
            return{...state}
    }
}

export const Store = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initial_state)
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}
