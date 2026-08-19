import Navbar from './components/Navbar';
import Hero from './sections/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-96">
          <section id="preview" className="h-screen flex items-center">
            <h2 className="text-3xl font-bold">Product Preview</h2>
          </section>

          <section id="how-it-works" className="h-screen flex items-center">
            <h2 className="text-3xl font-bold">How it Works</h2>
          </section>
        </div>
      </main>
    </div>
  )
}
