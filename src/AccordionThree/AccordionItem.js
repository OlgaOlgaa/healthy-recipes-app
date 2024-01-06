import { useState } from "react"

export const AccordionItem = ({title,content,image, name}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div>
            <div className={isOpen ? 'active' : 'default'}
            onClick = {handleIsOpen}>
             {title} 
             <img src={image} width='500px' height='300px'/>
          </div>
                {
                 isOpen && <div className= 'content'>
                <div className="nameMeal">
                 {name}
                 </div>
                 {content}
          </div>
                }
        </div>
    )
}