import React from "react";


const ChildComponent2 =({props})=>{

    return(
        <div style={{backgroundColor:"brown"}}>
            <h1>Child Component 2</h1>
            
            <button onClick={()=>props("Option 2")}>Option 2</button>

        </div>
    )
}

export default ChildComponent2;