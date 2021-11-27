import ProjectData from './data/projectData.json'
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
                                <div className="overlay-body">
                                    <div className="head-container">
                                        <div className="app-name">
                                            <p>{overlay.name}</p>
                                        </div>
                                        <button title="Close box" onClick={()=>closeOverlay(index)} className="close-overlay">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                    <div className="app-img-container">
                                        <Carousel
                                            showThumbs={false}
                                            showStatus={false}
                                            showArrows={true}
                                            infiniteLoop={true}
                                            emulateTouch={true}
                                        >{overlay.image.map(img=>{
                                            return(<img key={overlay.image.indexOf(img)} className="app-image" src={img} alt="App's mobile screenshot"/>)
                                        })}</Carousel>
                                    </div>
                                    <div className="app-summary">
                                        <p>{overlay.summary}</p>
                                    </div>
                                    <div className="btn-container">
                                        <button className="code-btn" onClick={()=>gotoCode(index)} title="Go to Code">
                                            <i className="fab fa-github"></i>
                                        </button>
                                        <button className="app-btn" onClick={()=>gotoApp(index)} title="Go to app">
                                            <i className="fas fa-arrow-right"></i>
                                        </button>
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
    function gotoCode(i){
        window.open(`${ProjectData[i].code}`,"_blank")
    }

    const [width, setWidth] = useState(0)

    useEffect(()=>windowSize())

    window.onresize = windowSize

    function windowSize(){
        const width = window.innerWidth
        setWidth(width)
    }


    return(
        <section className="work">
            <h2 className="sec-one-title">Projects</h2>
            <div className="slide" aria-label="projects slides">
                <div className="swiper-container">
                    { width <= 530 ? 
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        showArrows={false}
                        infiniteLoop={true}
                        emulateTouch={true}
                    >
                        {projects}
                    </Carousel> 
                    : 
                    <>{projects}</> }
                </div>
            </div>
            <div id="overlay">
                {overlays}
            </div>
        </section>
    )
}