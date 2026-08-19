import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Temporary spacing to test scrolling and navbar states */}
      <main className="pt-24 pb-96">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-96">
          <section id="hero" className="h-screen flex items-center">
            <h1 className="text-4xl font-bold">Hero Section</h1>
          </section>
          
          <section id="product" className="h-screen flex items-center">
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
