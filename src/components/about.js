import Images from "./data/imageData.json"
import '../styles/about.css'
import AboutData from './data/summaryData.json'

export default function About(){
    return(
        <main className="about-main">
            <img className="about-bg" src={Images.path[0]} alt="about background"/>
            <h2 className="about-desc">{AboutData.about}</h2>
        </main>
    )
}