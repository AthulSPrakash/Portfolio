import Nav from './components/nav'
import Main from './components/main'
import Project from './components/projects'
import Graphics from './components/graphics.js'
import Footer from './components/footer'
import About from './components/about'
import Skill from './components/skills'
import './styles/App.css'
import { useState } from 'react'

function App() {

  const [check, setCheck] = useState(false)
  
  function changePage(e){
    setCheck(prevState => !prevState)
    e.target.textContent = check ? 'about' : 'home'    
  }

  return (
    <>
      <Nav about={changePage}/>
      {!check ?
        <> 
          <Main/>
          <Project/>
          <Graphics/>
        </>
        :
        <>
          <About/>
          <Skill/>
        </>
        }
      <Footer page={check}/>
    </>
  )
}

export default App
