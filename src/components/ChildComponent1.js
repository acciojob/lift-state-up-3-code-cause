import React from "react";


const ChildComponent1 =({props})=>{

    return(
        <div style={{backgroundColor:"brown"}}>
            <h1>Child Component 1</h1>
            
            <button onClick={()=>props("Option 1")}>Option 1</button>

        </div>
    )
}

export default ChildComponent1;