import React from "react";
import { useState } from "react";

function useInput () {
    const [value, setValue] = useState("")
    
    function onChange(e){
        setValue(e.target.value);
    } 
    return {onChange:onChange,value:value}
}
  
export default useInput