import { useState, useEffect } from "react"
export default function Nav({about}){
    const [check, setCheck] = useState(false)
    function changePage(e){
        if(check===true){
            setCheck(false)
            e.target.textContent = 'about'
        }  
        else {
            setCheck(true)
            e.target.textContent = 'home'
        }    
    }
    useEffect(() => {
        about(check)
    }, [check])
    return(
        <nav className="nav">
            <p className="logo">Portfolio</p>
            <p onClick={(e)=>changePage(e)} className="switch-page" aria-label="about page">about</p>
        </nav>
    )
}