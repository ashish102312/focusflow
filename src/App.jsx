import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import ProductPreview from './sections/ProductPreview';
import Features from './sections/Features';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <Hero />
        <ProductPreview />
        <Features />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-96">
          <section id="how-it-works" className="h-screen flex items-center">
            <h2 className="text-3xl font-bold">How it Works</h2>
          </section>
        </div>
      </main>
    </div>
  )
}
