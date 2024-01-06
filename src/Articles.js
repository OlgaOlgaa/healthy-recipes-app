import { useState } from "react";
import TabInfoOne from "./Tabs/TabInfoOne";
import TabInfoTwo from "./Tabs/TabInfoTwo";
import TabInfoThree from "./Tabs/TabInfoThree";
import Tabs from "./Tabs/Tabs";
import TabInfoFour from "./Tabs/TabInfoFour";
import TabInfoFive from "./Tabs/TabInfoFive";
import { useEffect } from 'react';
import LoaderPage from './Loader/LoaderPage';



function Articles() {
const [activeTab, setActiveTab] = useState(0);

const [stateLoader, setStateLoader] = useState(true);
    useEffect(() => {
      const timer = setTimeout (() =>
      setStateLoader(false),2500);
      return() => clearTimeout(timer)
    },[])

return(  
<div className="articles">
  <div>
     {stateLoader && <LoaderPage/>}
  </div>

    <h2 className="header-reciepes">ON THIS PAGE YOU'LL DISCOVER</h2>
 
   <Tabs className='tabs' setActiveTab = {setActiveTab}/>
    {activeTab === 0 && <TabInfoOne/>}
    {activeTab === 1 && <TabInfoTwo/>}
    {activeTab === 2 && <TabInfoThree/>}
    {activeTab === 3 && <TabInfoFour/>}
    {activeTab === 4 && <TabInfoFive/>}
    </div>
 
    );
}
export default Articles;