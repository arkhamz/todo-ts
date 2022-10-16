import { ReactNode } from "react";
import { List, ListItem } from "../types/types";
import "./ItemsPreview.css"
import ListItemComponent from "./ListItemComponent";

// renders a preview of list's items
function ItemsPreview({data}:{data: List}){
    return <ul className="prev-items">
        {/* Only show the first 3 items for each thing */}
        {data && data.items.slice(0,3).map(function(i:ListItem)  {
            return <div key={i.id} className="prev-item">
            <span>{i.content}</span>
        </div>
        })}
       
    </ul>
}


export default ItemsPreview;