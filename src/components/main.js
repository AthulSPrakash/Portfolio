import Summary from './data/summaryData'
import Images from './data/imageData'
import { useEffect } from 'react'

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
        <main>
            <img src={Images.path} alt="background" />
            <div className="summary">
                <h1 id="hover-text" aria-label="summary">
                </h1>
            </div>
        </main>
    )
}