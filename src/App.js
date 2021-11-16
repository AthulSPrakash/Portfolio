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
  const [page, setPage] = useState()

  function pageCheck(value){
    setPage(value)
  }

  return (
    <>
      <Nav about={pageCheck}/>
      {!page ?
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
      <Footer/>
    </>
  )
}

export default App
