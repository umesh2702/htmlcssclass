import Main from "./Main";
import React,{useState} from "react"
import Header from "./Header";
import Footer from "./Footer";
import LeftPanal from "./LeftPanal";
function MainContainer(){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count+1)
                console.log(count)
    }
    function handleClick2(){
        setCount(count-1)
    }
    return(
        <div className="MainContainer">
            <Header/>
            <LeftPanal />
            <Main count={count} handleClick={handleClick} handleClick2={handleClick2}/>
            <Footer/>

        </div>

    )
}
export default MainContainer;