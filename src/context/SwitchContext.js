import React, { createContext, useReducer } from "react";


export const SwitchContext = createContext();

const SwitchContextProvider = props => {
    const [isLightOn, dispatch] = useReducer(SwitchReducer, false);

    return (
        <SwitchContext.Provider value={{isLightOn, dispatch}}>
            {props.children}
        </SwitchContext.Provider>
    )
}


const SwitchReducer = (state, action) => {
    const {type} = action;
    switch (type) {
        case "TOGGLE":
            console.log("HERE")
            console.log(state.isLightOn)
            const lightStatus = state.isLightOn;
            return {...state, isLightOn: !lightStatus}
        default:
            return {...state}
    }
}

export default SwitchContextProvider