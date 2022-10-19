import { useEffect, useState } from "react"
import ListPreview from "../components/ListPreview";
import useFetchLists from "../hooks/useFetchLists"
import "./Home.css"
import { ConsumeContext } from "../context/config";
import ListDetailOverlay from "../components/ListDetailOverlay";

//Renders todo-lists
export default function Home(){

    const [overlayOpen, setOverlayOpen] = useState<boolean>(false);

    const {data,error,fetchLists} = useFetchLists();
    const contextData = ConsumeContext();
    console.log(contextData);

    useEffect(function(){

        fetchLists();

    },[]);

    function openOverlay(){
        setOverlayOpen(true);
    }

    function closeOverlay(){
        setOverlayOpen(false);
    }

    console.log(data);

    return (
        <div className="Home">
            {data && <ListPreview openOverlay={openOverlay} closeOverlay={closeOverlay} data={data} />}
            {error && <p>{error}</p>}
            {overlayOpen && <ListDetailOverlay closeOverlay={closeOverlay} />}
        </div>
    )

}



