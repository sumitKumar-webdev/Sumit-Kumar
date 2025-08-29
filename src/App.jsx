import { useState } from 'react'
import './App.css'
import {aboutComponent as About} from './Component/aboutComponent'
import { HeroSection } from './Component/HeroSection'
import Header from './Component/Header/Header'
import FloatingParticals from './Component/FloatingParticals'
import Project from './Component/Project'
import Skills from './Component/Skills'
import Contact from './Component/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 ">
    <FloatingParticals />
    <main className='flex flex-col gap-32 mx-auto'>
    <HeroSection />    
    <About />
    <Project />
    <Skills />
    <Contact />
    </main>
    </div>
   
  </>
  )
}

export default App
