import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TechnologiesSection } from './components/TechnologiesSection'
import { Footer } from './components/Footer'
import { useTechnologies } from './hooks/useTechnologies'
import type { Technology } from './types/technology'

function App() {
  const { technologies, loading, error } = useTechnologies()
  const [stack, setStack] = useState<Technology[]>([])

  const addToStack = (technology: Technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }
    setStack((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (id: string) => {
    const item = stack.find((technology) => technology.id === id)
    setStack((current) => current.filter((technology) => technology.id !== id))
    if (item) toast.info(`${item.name} removed from your stack.`)
  }

  const removeAll = () => {
    if (!stack.length) return
    setStack([])
    toast.info('Your entire stack has been cleared.')
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <section className="sr-only" id="projects" aria-label="Projects">Developer project resources are part of the Dev Stack catalogue.</section>
        <section className="sr-only" id="about" aria-label="About">Dev Stack is a focused technology discovery interface for developers.</section>
        {loading ? (
          <div className="loading-state"><span className="spinner" /> Loading technologies...</div>
        ) : error ? (
          <div className="error-state">{error}</div>
        ) : (
          <TechnologiesSection
            technologies={technologies}
            stack={stack}
            onAdd={addToStack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        )}
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2200} newestOnTop theme="light" />
    </div>
  )
}

export default App
