export default function Nav(props){
    return(
        <nav className="nav">
            <p className="logo">Portfolio</p>
            <p onClick={props.about} className="switch-page" aria-label="about page">about</p>
        </nav>
    )
}