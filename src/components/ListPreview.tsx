import { ReactNode } from "react";
import { List,ListItem } from "../types/types";
import ItemList from "./ItemList";
// import ListItem from "./ListItem"

type ListPreviewProps = {
    data: List[] | null;
}


//renders a list of todolists
function ListPreview({data} : ListPreviewProps){
    return <ul className="todo-list">
        {data && data.map(function(list:List) : ReactNode{
            return <div key={list.id}>
                <h2>{list.name}</h2>
                {list.items.map(function(item :ListItem) : ReactNode{

                    return <p key={item.id}>{item.content}</p>

                })}
            </div>
        })}
    </ul>
}

export default ListPreview;