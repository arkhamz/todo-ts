import { useState, useEffect } from "react";
import axios from "axios";
import {List} from "../types/types"



type payloadObj = {

    data: List[] | null;
    error: string | null | undefined;
    fetchLists: () => Promise<any>;
    
}



export default function useFetchLists() :payloadObj {

    const [data,setData] = useState<null | List[]>(null);
    const [error,setError] = useState<null | undefined | string>("")

    //start of function for fetching lists
    async function fetchLists() :Promise<any> {
        setError("");

        try {
            const response = await axios.get("http://localhost:4000/lists");
            const lists : List[] = response.data;
            setData(lists);
            setError("")
        } catch (e) {
            if (e instanceof Error){
                console.log(e);
                console.log(e.message);
                setError(e.message);
            }
        }
    }
    //end of function for fetching lists

    return {data,error,fetchLists}

}