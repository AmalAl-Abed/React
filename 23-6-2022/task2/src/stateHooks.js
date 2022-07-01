import React, { useState } from "react";



function StateHooks(){
const [counter ,setCounter]= useState(0) ;

const increment = () => {
    setCounter(counter+1);

}




    return(
         <div>
                  <h3>*using hooks with stateless functions*</h3>
          {counter}
           <button onClick={increment}>increment</button>

         </div>


    )
}


export default StateHooks;