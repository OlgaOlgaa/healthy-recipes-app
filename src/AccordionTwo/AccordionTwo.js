import { AccordionItem } from "./AccordionItem";
import { list } from "./list";
import './style.css';
import React from "react";

export const AccordionTwo = () => {
    return (
        <div className="containerAccordion">
            {list.map ((item,index) =>
            <AccordionItem key={index} title={item.title} image={item.image} name={item.name} content = {item.content}/>
            )}
        </div>
    )
}