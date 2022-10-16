import { ReactNode } from "react";
import { List } from "../types/types";
import { ConsumeContext } from "./context/config";
import ItemsPreview from "./ItemsPreview"
import "./ListPreview.css";

// Define the component's props
type ListPreviewProps = {
    data: List[] | null;
    openOverlay : () => void ;
    closeOverlay: () => void;
}


//renders a list of todolists
function ListPreview(props: ListPreviewProps){

    const {dispatch} = ConsumeContext();





    return <ul className="prev-lists">
        {props.data && props.data.map(function(list:List) : ReactNode{
            return <div onClick={() => {
                dispatch({type:"SET_DETAIL", payload: list});
                props.openOverlay()
            }} className="prev-list" key={list.id}>
                <h3>{list.name}</h3>
                <h3>{`- ${new Date(list.createdAt).toDateString()}`}</h3>
                <ItemsPreview data={list} />
               
            </div>
        })}
    </ul>
}

export default ListPreview;