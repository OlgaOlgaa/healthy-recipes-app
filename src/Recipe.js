import { useState } from "react";
import { Accordion } from "./Accordion/Accordion";
import { AccordionTwo } from "./AccordionTwo/AccordionTwo";
import {AccordionThree} from './AccordionThree/AccordionThree';
import {AccordionFour} from './AccordionFour/AccordionFour';
import {AccordionFive } from './AccordionFive/AccordionFive';
import {AccordionSix} from './AccordionSix/AccordionSix';
import {AccordionSeven} from './AccordionSeven/AccordionSeven';
import { useEffect } from 'react';
import LoaderPage from './Loader/LoaderPage';


 function Recipe() {

    const [showComponent, setShowComponent] = useState('Accordion');
    const handleButtonClick = (componentName) => {
        setShowComponent(componentName);
    };
    const [stateLoader, setStateLoader] = useState(true);
    
    useEffect(() => {
      const timer = setTimeout (() =>
      setStateLoader(false),2500);
      return() => clearTimeout(timer)
    },[])
   

    return(
        <div>
            <div>
             {stateLoader && <LoaderPage/>}
             </div>
              <div className="body-recipes">
               <h2 className="header-reciepes">Choose your menu for a week</h2>
            <div className="p-calories">
               <p className="p-recipes">1500 kcal 94 g pro, 164 g carb, 50 g fat</p>
           </div>
 
            <div className="greenRecipes">
                <div className="greenLightBlock">
                  <div className="weekDays">
                    <p className="par-recipes">Menu for a week</p>
                    <button className="btn-weekday" onClick={() => handleButtonClick('Accordion')}>Mon</button>
                    <button className="btn-weekday" onClick={() => handleButtonClick('AccordionTwo')}>Tue</button>
                    <button className="btn-weekday" onClick={() => handleButtonClick('AccordionThree')}>Wed</button>
                    <button className="btn-weekday" onClick={() => handleButtonClick('AccordionFour')}>Thu</button>
                    <button className="btn-weekday" onClick={() => handleButtonClick('AccordionFive')}>Fri</button>
                    <button className="btn-weekday" onClick={() => handleButtonClick('AccordionSix')}>Sat</button>
                    <button className="btn-weekday" onClick={() => handleButtonClick('AccordionSeven')}>Sun</button>
                  </div>
                
                    {showComponent === 'Accordion' && <Accordion/>}
                    {showComponent === 'AccordionTwo' && <AccordionTwo/>}
                    {showComponent === 'AccordionThree' && <AccordionThree/>}
                    {showComponent === 'AccordionFour' && <AccordionFour/>}
                    {showComponent === 'AccordionFive' && <AccordionFive/>}
                    {showComponent === 'AccordionSix' && <AccordionSix/>}
                    {showComponent === 'AccordionSeven' && <AccordionSeven/>}
                </div>      
            </div> 
</div>

</div>

    )
}
export default Recipe;