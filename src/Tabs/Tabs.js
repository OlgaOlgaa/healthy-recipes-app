import TabItem from "./TabItem";



 const Tabs = ( {setActiveTab} ) => {
    return(
        <div className="tabs"> 
        {
            ['What is nutrition and why is nutrition important?', 'What foods are healthy?', 'Should you take daily vitamins?', 'Nutrition for older adults', 'Meal prep ideas'].map((tab, index) =>(
                <TabItem 
                
                key={index}
                tab={tab}
                index={index}
                setActiveTab = {setActiveTab}/>
            ))
        }
        </div>
    )
 }
 export default Tabs;