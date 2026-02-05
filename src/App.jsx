import './App.css'
import Header from './components/Header'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Skills from './components/Skills'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <TechStack />
      <Projects />
      <Skills />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
