import { ReactNode } from "react";
import { List, ListItem } from "../types/types";

// renders a list's items
// a popup? overlay?
function ItemsPreview({data}:{data: List}){
    return <ul className="todo-list">
        {data && data.items.map(function(i:ListItem) :ReactNode {

            return <div key={i.id} className="item">
                <span>{i.content}</span>
            </div>

        })}
       
    </ul>
}

export default ItemsPreview;