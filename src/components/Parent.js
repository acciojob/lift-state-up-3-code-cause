import React,{useState} from "react";
import ChildComponent1 from "./ChildComponent1";

import ChildComponent2 from "./ChildComponent2";



const Parent=()=>{

    const [selectedOption, Setselectedoption]= useState('');

    return(
        <div className="Parent" style={{backgroundColor:"red"}}>

         <h1>Parent Component</h1>
         <ChildComponent1 props={Setselectedoption} />

         <ChildComponent2 props={Setselectedoption} />
 
         
         <p>Selected Option: {selectedOption}</p>

        </div>
    )
}
export default Parent;