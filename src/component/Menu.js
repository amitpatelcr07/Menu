import DisplayMenu from "./DisplayMenu";
import { useState } from "react";
import './Menu.css'
function Menu({data}){
    let x;
    const [category,setCategory]=useState([]);
  
    function handler(e){
        let y=e.target.value;
        if(y!='All'){
            x=data.filter((val)=>{
                if(y===val.category){
                    return val
                }
            })
        }else{

            x=data;
        }

       setCategory(x);
       
    }
    
    return <>
     <div className="btn-d">
        <button onClick={handler} value={'All'} className="btn">All</button>
        <button onClick={handler} value={'breakfast'} className="btn">Breakfast</button>
        <button onClick={handler}value={'lunch'} className="btn">Lunch</button>
        <button onClick={handler}value={'shakes'} className="btn">Shakes</button>
     </div>
      {category.map((val)=>{
        return <DisplayMenu {...val}/>
      })}
    </>
}

export default Menu;