import ProjectData from './data/projectData.json'
import Summary from './data/summaryData.json'
import { useState,useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import '../styles/project.css'

export default function Project(){
    const overlays = ProjectData.map(overlay=>{
        const index = overlay.id
        return(
        <div key={overlay.id} className="overlay-container" id={`overlay-container-${overlay.id}`}>
            <div onClick={()=>closeOverlay(index)} className="ovrly-cls-asst"></div>
                <div className="overly-wrapper">
                    <div onClick={()=>closeOverlay(index)} className="ovrly-cls-asst2"></div>
                        <div className="overlay">
                            <button title="Close box" onClick={()=>closeOverlay(index)} className="close-overlay">
                                <i className="fas fa-times"></i>
                            </button>
                            <div className="overlay-body">
                                <div className="app-img-container">
                                    <img id="app-image" src={overlay.image} alt="App's mobile screenshot" />
                                </div>
                                <div className="app-details">
                                    <div className="app-name">
                                        <p>{overlay.name}</p>
                                    </div>
                                    <div className="app-summary">
                                        <p>{overlay.summary}</p>
                                    </div>
                                    <div className="app-feat-wrapper">
                                        <div className="app-feat1">
                                            <ul>
                                                <li>{overlay.feat[0]}</li>
                                                <li>{overlay.feat[1]}</li>
                                            </ul>
                                        </div>
                                        <div className="app-feat2">
                                            <ul>
                                                <li>{overlay.feat[2]}</li>
                                                <li>{overlay.feat[3]}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="app-icon">
                                        <img src={overlay.icon} alt="App icon" />
                                        <button onClick={()=>gotoApp(index)} title="Go to app">
                                            <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div onClick={()=>closeOverlay(index)} className="ovrly-cls-asst2"></div>
                </div>
            <div onClick={()=>closeOverlay(index)} className="ovrly-cls-asst"></div>
        </div>
        )
    })

    const projects = ProjectData.map(project=>{
        const index = project.id
        return(
            <div key={project.id} className="swiper-slide" onClick={()=>openOverlay(index)}>
                <img src={project.preview} alt={project.name}/>
            </div>
        )
    })


    function openOverlay(i){
        document.querySelector(`#overlay-container-${i}`).classList.add('visible')
    }
    function closeOverlay(i){
        document.querySelector(`#overlay-container-${i}`).classList.remove('visible')
    }
    function gotoApp(i){
        window.open(`${ProjectData[i].url}`,"_blank")
    }

    const [width, setWidth] = useState(0)
    useEffect(()=>windowSize())
    window.onresize = windowSize
    function windowSize(){
        const width = window.innerWidth
        setWidth(width)
    }

    const fader = document.querySelector(".text")
    const appearOptions = {
        threshold : 0,
        rootMargin : "0px 0px -48% 0px"
    }
    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
        ){
        entries.forEach(entry => {
            if(!entry.isIntersecting) return
            else{
                entry.target.classList.add("appear")
                appearOnScroll.unobserve(entry.target)
            }
        })
    },
    appearOptions)
    if(fader) appearOnScroll.observe(fader)

    return(
        <section className="work">
            <h2 className="sec-one-title">Projects</h2>
            <div className="slide" aria-label="projects slides">
                <div className="swiper-container">
                    { width <= 530 ? 
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        emulateTouch={true}
                    >
                        {projects}
                    </Carousel> 
                    : 
                    <>{projects}</> }
                </div>
            </div>
            <div className="quote">
                <blockquote className="text">{Summary.quote}</blockquote>
            </div>
            <div id="overlay">
                {overlays}
            </div>
        </section>
    )
}