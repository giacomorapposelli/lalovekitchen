import React,{useState,useEffect} from "react"
import Home from "./home"

function App() {
    const [className,setClassName] = useState("logo-container")

    useEffect(() => {
        setTimeout(()=> {           
            setClassName("logo-container fadeout")
        },3000)
    },[])

return (
    <div className="container">
        <Home />
        <div className={className}> <div className="box"></div> </div>
    </div>
) 
              
        
}


export default App