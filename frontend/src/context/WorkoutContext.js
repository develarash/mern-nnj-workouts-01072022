import { createContext, useReducer } from "react";

export const WorkoutsContext=createContext()

export const WorksoutsContextProvider=({children})=>{
    const [state,dispatch]=useReducer(workoutsReducer,{
        workouts:null
    })
    dispatch({type:"CREATE_WORKOUTS"})
    return(
        <WorkoutsContext.Provider value={{workouts:[]}}>
            {children}
        </WorkoutsContext.Provider>
    )
}