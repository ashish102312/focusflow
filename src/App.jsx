import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import ProductPreview from './sections/ProductPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      <main>
        <Hero />
        <ProductPreview />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-96">
          <section id="how-it-works" className="h-screen flex items-center">
            <h2 className="text-3xl font-bold">How it Works</h2>
          </section>
        </div>
      </main>
    </div>
  )
}
