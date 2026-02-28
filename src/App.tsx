import Hero from './components/Hero'
import Events from './components/Events'
import Schedule from './components/Schedule'

function App() {
  return (
    <div className="bg-[#030014] min-h-screen text-white/90 selection:bg-brand selection:text-white">
      <div className="relative z-10">
        <Hero />
        <Events />
        <Schedule />
      </div>
    </div>
  )
}

export default App
