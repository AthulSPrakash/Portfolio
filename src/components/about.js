import Images from "./data/imageData.json"
import '../styles/about.css'
import AboutData from './data/summaryData.json'

export default function About(){
    return(
        <main className="about-main">
            <img className="about-bg" src={Images.path[0]} alt="about background"/>
            <h1 className="about-desc">
                <span className="about-desc-title">My name is Athul S Prakash.</span><br/>
                {AboutData.about}
            </h1>
        </main>
    )
}