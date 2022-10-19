import { useState } from "react";
import { ListItem, List } from "../types/types";
import ListItemComponent from "./ListItemComponent";
import { ConsumeContext } from "../context/config";
import "./ListDetailOverlay.css";

type OverlayProps = {

    closeOverlay: () => void;

}

// Overlay list detail page
export default function ListDetailOverlay(props: OverlayProps){

    const {state,dispatch} = ConsumeContext();
    const list = state.listDetail;
    console.log("overlay", list);



    return <div className="list-detail-overlay" >
        <>
        {list && (
            <div className="overlay-content">
            <h3>{list.name}</h3>
             <h3>{`- ${new Date(list.createdAt).toDateString()}`}</h3>
             <ul className="list-detail-items">
                 {list && list.items.map(function(listItem: ListItem){
                     return <ListItemComponent listItem={listItem} key={listItem.id} />
                 })}
             </ul>
             <button className="btn-close" onClick={e => {
                props.closeOverlay();
                dispatch({type: "CLEAR_DETAIL"})
             }}>X</button>
            </div>
        )}
        </>
    </div>
}