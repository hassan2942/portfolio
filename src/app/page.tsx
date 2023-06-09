import Image from 'next/image'
import Hero from './components/hero'
import Contact from './components/contact'
import Projects from './components/projects'
import Skills from './skills'



export default function Home() {
  return (
    <div>
     <Hero/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
  )
}
