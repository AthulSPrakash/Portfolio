import Summary from "./data/summaryData.json"
import { useEffect } from 'react'
import '../styles/skill.css'

export default function Skill(){
    let fSkills = ''
    let bSkills = ''
    let mSkills = ''
    for(let i=0; i<Summary.fEnd.length; i++){
        fSkills += `
        <div class="skill-wrap">
            <p class="skill">${Summary.fEnd[i]}</p>
        </div>`
    }
    for(let i=0; i<Summary.bEnd.length; i++){
        bSkills += 
        `<div class="skill-wrap">
            <p class="skill">${Summary.bEnd[i]}</p>
        </div>`
    }
    for(let i=0; i<Summary.misc.length; i++){
        mSkills += 
        `<div class="skill-wrap">
            <p class="skill">${Summary.misc[i]}</p>
        </div>`
    }
    useEffect(()=>{
        const fEnd = document.querySelector('#fend')
        const bEnd = document.querySelector('#bend')
        const misc = document.querySelector('#misc')
        fEnd.innerHTML = fSkills
        bEnd.innerHTML = bSkills
        misc.innerHTML = mSkills
    })

    return(
        <section className="skills">
            <h2 className="skill-sec-title">SKILLS</h2>
            <h3 className="skill-section">WEB DEVELOPMENT</h3>
            <div id="fend" className="dtls"></div>
            <div id="bend" className="dtls"></div>
            <h3 className="skill-section">MISC</h3>
            <div id="misc" className="dtls"></div>
            <h3 className="edu-h1">EDUCATION</h3>
            <p className="edu">Bachelor of Technology - Information Technology</p>
        </section>
    )
}