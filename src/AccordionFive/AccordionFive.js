import { AccordionItem } from "./AccordionItem";
import { list } from "./list";
import './style.css'

export const AccordionFive = () => {
    return (
        <div className="containerAccordion">
            {list.map ((item,index) =>
            <AccordionItem key={index} title={item.title} image={item.image} name={item.name} content = {item.content}/>
            )}
        </div>
    )
}