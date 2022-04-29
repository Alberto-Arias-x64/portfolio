import { createContext, useReducer } from "react"


const initial_state = { selected_item: '' }
const reducer = (state, action) => {
    const{type, payload} = action
    switch (type) {
        case '@item/set_item':
            return { ...state , selected_item:payload}

        default:
            return state
    }
}

export const Context = createContext()

export const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initial_state)

    const set_item = (id) =>{
        dispatch({
            type:'@item/set_item',
            payload:id
        })
    }
    return (
        <Context.Provider value={{ state, set_item }}>
            {children}
        </Context.Provider>
    )
}
