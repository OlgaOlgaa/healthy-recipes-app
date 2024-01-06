import plate from './plate.png';
import plateOat from './plateOat.png';
import raspberry from './raspberry.png';
import raspberryTwo from './raspberryTwo.png';
import { useState } from 'react';
import {data} from './data';
import { useEffect } from 'react';
import LoaderPage from './Loader/LoaderPage';




 export default function Home() {

    const [services, setServices] = useState(0);
    const {id, image, discription} = data[services];
    const handleButtonClick = () => {
          window.location.href ="Recipe"}

    const previousPicture = () =>{
        setServices((services =>{
            services --;
            if (services<0){
                services = data.length-1
            }
            return services;
            }))
         }
    const nextPicture = () =>{
        setServices((services =>{
            services ++;
            if (services>data.length-1){
                services=0
            }
            return services;
            }))
        }

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
        <div className='header-home'>
        <img className='raspberryImage'src={raspberry} width='200px'/>
        <h1>Nutrition App</h1>
        <img className='raspberryImage' src={raspberryTwo} width='150px'/>
        </div>
        <div className='greenBody'>
          <img className='plate' src={plate}/>
          <div >
          <h2 className='healthyMeal'>Healthy Meal</h2>
        
          <h3>Achieve your athletic goals with a varied diet</h3>
          <p className='par-home'>Our delicious nutrition programs with fresh fruits and vegetables in every meal will help you lose weight or gain muscle mass.</p>
          <button className='btn' onClick={handleButtonClick} >Show menu</button>
          </div>
          <img className='plate oat' src={plateOat}/>
      </div>

         <div className='description'>
            <h4>Find on the website:</h4>
           <h4>{discription}</h4>
         </div>
      
      <div className='slider'>
          <button className='btnSlider' onClick={previousPicture}>Prev</button>
           <img className='homeMeals' src={image} width='65%' height='800px'/>
           <button className='btnSlider' onClick={nextPicture}>Next</button>
      </div>
    </div>
    )
        }
