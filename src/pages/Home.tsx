import { useEffect } from "react"
import ListPreview from "../components/ListPreview";
import useFetchLists from "../hooks/useFetchLists"


//Renders todo-lists
export default function Home(){

    const {data,error,fetchLists} = useFetchLists();

    useEffect(function(){

        fetchLists();

    },[])

    console.log(data);

    return (
        <div className="">
            <ListPreview data={data} />
        </div>
    )

}



