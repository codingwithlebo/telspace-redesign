import Header from './components/Header'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import TrainingResearch from './components/TrainingResearch'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body text-ink">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <TrainingResearch />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}
