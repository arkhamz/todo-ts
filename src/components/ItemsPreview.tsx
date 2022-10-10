import { ReactNode } from "react";
import { List, ListItem } from "../types/types";
import "./ItemPreview.css"
import ListItemComponent from "./ListItemComponent";

// renders a preview of list's items
function ItemsPreview({data}:{data: List}){
    return <ul className="prev-items">
        {/* Only show the first 3 items for each thing */}
        {data && data.items.slice(0,3).map(function(i:ListItem)  {
            return <ListItemComponent listItem={i} key={i.id}/>
        })}
       
    </ul>
}


export default ItemsPreview;