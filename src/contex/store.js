import { createContext, useReducer } from "react"


const initial_state = []
/* {
    name: '',
    contend: false,
    is_active: false,
    is_hide: false
} */

const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case '@item/add_item':
            let flag = false
            state.forEach(element => {
                if (element.name == payload.name) flag = true
            })
            if (flag === true) return [...state]
            return [...state, payload]

        case '@item/active_item':
            return state.map(element => {
                if (payload.name === element.name) {
                    const nuevo = {
                        ...element,
                        is_active: payload.is_active,
                        is_hide: payload.is_hide
                    }
                    return nuevo
                }
                else {
                    const nuevo = {
                        ...element,
                        is_active: false
                    }
                    return nuevo
                }
            })
        case '@item/hide_item':
            return state.map(element => {
                if (payload.name === element.name) {
                    const nuevo = {
                        ...element,
                        is_active: payload.is_active,
                        is_hide: payload.is_hide
                    }
                    return nuevo
                }
                return element
            })

        default:
            return state
    }
}

export const Context = createContext()

export const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initial_state)

    const add_item = (name) => {
        dispatch({
            type: '@item/add_item',
            payload: {
                name,
                contend: false,
                is_active: false,
                is_hide: false,
            }
        })
    }

    const active_item = (name) => {
        dispatch({
            type: '@item/active_item',
            payload: {
                name,
                contend: false,
                is_active: true,
                is_hide: false,
            }
        })
    }
    const hide_item = (name) => {
        console.log(name)
        dispatch({
            type: '@item/hide_item',
            payload: {
                name,
                contend: false,
                is_active: false,
                is_hide: true,
            }
        })
    }

    return (
        <Context.Provider value={{ state, add_item, active_item, hide_item }}>
            {children}
        </Context.Provider>
    )
}
