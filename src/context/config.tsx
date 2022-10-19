import React, { createContext, ReactNode, useReducer, useContext } from "react";
import {List} from "../types/types"

// type for a User obj - will get from firebase
type User = {
    username: string;
    token: string;
    email: string;
}
type InitialStateType = {
    user: User | null;
    token: string | null;
    lists: List[] | null;
    listDetail: List | null;
}

type Context = {
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}

const initialState  = {
    user: null,
    token: "null",
    lists: null,
    listDetail: null
}

type ACTIONTYPES = 
    | {type: "LOGIN"; payload: User}
    | {type: "LOGOUT"; payload: null}
    | {type: "COMPLETED"; payload: List }
    | {type: "FETCH_LISTS"; payload: List[]}
    | {type: "SET_DETAIL"; payload: List}
    | {type: "CLEAR_DETAIL"; payload: null};

export const AppContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({state:initialState, dispatch: () => {}});


export function appReducer(state: InitialStateType, action: ACTIONTYPES ){
    switch (action.type) {
        case "LOGIN":
            return {...state, user: action.payload};
        
        case "LOGOUT":
            return {...state, user: null}
        
        case "COMPLETED":
            // api updates item and returns its list
            //map through lists, if a list id matches updated list, return updated list
            {
                const updatedItemList = action.payload;
                if(state.lists === null) return state;


                const updatedLists : List[] = state.lists.map(function(list){
                    if(list.id == updatedItemList.id){
                        return updatedItemList;
                    } else{
                        return list;
                    }
                })
                return {...state, lists: updatedLists};
            }

        case "FETCH_LISTS":
            return {...state, lists: action.payload};

        case "SET_DETAIL":
            return {...state, listDetail: action.payload};

        case "CLEAR_DETAIL":
            return {...state, listDetail: null};
            

        default:
            return state;
    }

}

export function AppContextProvider({children}: {children:ReactNode}){
    const [state,dispatch] = useReducer(appReducer,initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

// COmponent that returns context value
//returns useCOntext(context)
// could it also be a normal function?

export function ConsumeContext() :Context{

        //return obj of state and value
    return useContext(AppContext);
}