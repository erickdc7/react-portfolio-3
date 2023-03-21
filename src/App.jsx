import './App.css'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Testimonials from './components/testimonials/Testimonials'

function App() {
  return (
    <main className="main">
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Testimonials />
    </main>
  )
}

export default App
