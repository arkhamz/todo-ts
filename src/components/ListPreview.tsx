import { ReactNode } from "react";
import { List } from "../types/types";
import ItemsPreview from "./ItemsPreview"

// Define the component's props
type ListPreviewProps = {
    data: List[] | null;
}


//renders a list of todolists
function ListPreview({data} : ListPreviewProps){
    return <ul className="todo-list">
        {data && data.map(function(list:List) : ReactNode{
            return <div key={list.id}>
                <h2>{list.name}</h2>
                <ItemsPreview data={list} />
               
            </div>
        })}
    </ul>
}

export default ListPreview;