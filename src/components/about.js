import Images from "./data/imageData"
import '../styles/about.css'

export default function About(){
    return(
        <main className="about-main">
            <img className="about-bg" src={Images.path[0]} alt="about background"/>
            <h1 className="about-text">
                About
            </h1>
        </main>
    )
}