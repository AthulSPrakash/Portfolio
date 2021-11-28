import Summary from './data/summaryData.json'
import Images from './data/imageData.json'
import { useEffect } from 'react'
import Firefly from './firefly'
import '../styles/main.css'

export default function Main(){
    let a = ''
    let b = ''
    for (let i = 0; i < Summary.name.length; i++){
        a += `<span>${Summary.name.charAt(i)}</span>`
    }
    for (let i = 0; i < Summary.short_summary.length; i++){
        b += `<span>${Summary.short_summary.charAt(i)}</span>`
    }
    useEffect(()=>{
        const intro = document.querySelector('#hover-text')
        intro.innerHTML = a + `<br>` + b
    })

    return(
        <main className="main">
            <img className="wall" src={Images.path[0]} alt="background" />
            <div className="summary">
                <h1 className="main-text" id="hover-text" aria-label="summary">
                </h1>
            </div>
            <Firefly/>
        </main>
    )
}