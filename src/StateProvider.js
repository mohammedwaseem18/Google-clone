// import React, {createContext,useContext,useReducer} from"react";

// export const StateContext = createContext();
// export const StateProvider =({reducer,initialState,children}) =>(

//     <StateContext.Provider value={useReducer(reducer,initialState)}>
//         {children}
//         </StateContext.Provider>
// );

// export const useStateValue = () => useContext(StateContext);

import { createContext, useContext,useReducer } from "react";


export const StateContext=createContext();

export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue=()=>useContext(StateContext)
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status