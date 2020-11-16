import React,{useState,useEffect} from "react";

function Welcome(){
    const [className, setClassName] = useState("logo-container");

    useEffect(() => {
        setTimeout(() => {
            setClassName("logo-container fadeout"); 
        }, 2500);
        setTimeout(() => {
            location.replace("/home")
        },3000)
    }, []);

    return (<div className={className}>
                {/* {" "}
                <div className="box"> */}
                <img className="logo" src="images/logo.png" alt="logo"></img>
                {/* </div>{" "} */}
            </div>)
}

export default Welcome