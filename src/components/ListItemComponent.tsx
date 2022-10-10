import { useState } from "react";
import { ListItem } from "../types/types";
import { ReactNode } from "react";
import {AiOutlineCheck} from "react-icons/ai"
import "./ListItemComponent.css"

function ListItemComponent({listItem}: {listItem: ListItem}) {

    const [done,setDone] = useState<boolean>(false);

    function handleComplete(){
        setDone(true);
    }

    return(
        <div key={listItem.id} className="prev-item">
                <span style={{color: (done ? "grey" : "inherit")}}>{listItem.content}</span>
                {!done && <button onClick={handleComplete}><AiOutlineCheck/></button>}
            </div>
    )

}

export default ListItemComponent;