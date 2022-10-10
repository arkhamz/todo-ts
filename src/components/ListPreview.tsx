import { ReactNode } from "react";
import { List } from "../types/types";
import ItemsPreview from "./ItemsPreview"
import "./ListPreview.css";

// Define the component's props
type ListPreviewProps = {
    data: List[] | null;
}


//renders a list of todolists
function ListPreview({data} : ListPreviewProps){
    return <ul className="prev-lists">
        {data && data.map(function(list:List) : ReactNode{
            return <div className="prev-list" key={list.id}>
                <h3>{list.name}</h3>
                <h3>{`- ${new Date(list.createdAt).toDateString()}`}</h3>
                <ItemsPreview data={list} />
               
            </div>
        })}
    </ul>
}

export default ListPreview;