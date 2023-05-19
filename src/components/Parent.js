import React,{useState} from "react";
import Child from "./Child";

const Parent=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);

    const handleLogin=()=>{
        setIsLoggedIn(true);
    }
    return(
        <div>
            <Child isLoggedIn={isLoggedIn} onLogin={handleLogin}></Child>
        </div>

    )
}

export default Parent;