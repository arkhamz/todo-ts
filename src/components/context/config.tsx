import React, { createContext, ReactNode, useReducer, useState } from "react";
import {List, ListItem} from "../../types/types"

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

const initialState  = {
    user: null,
    token: null,
    lists: null,
    listDetail: null
}

// type Context = {
//     state: InitialStateType;
//     dispatch: React.Dispatch<any>;
// }


type ACTIONTYPES = 
    | {type: "LOGIN"; payload: User}
    | {type: "LOGOUT"; payload: null}
    | {type: "COMPLETED"; payload: List }
    | {type: "FETCH_LISTS"; payload: List[]}
    | {type: "FETCH_LIST_DETAIL"; payload: List}
    | {type: "CLEAR_LIST_DETAIL"; payload: null};


// // export type Dispatch = (action:ACTIONTYPES) => void;
// export type Dispatch = (action:ACTIONTYPES) => void;

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

        case "FETCH_LIST_DETAIL":
            return {...state, listDetail: action.payload};

        case "CLEAR_LIST_DETAIL":
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