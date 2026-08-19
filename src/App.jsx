import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import ProductPreview from './sections/ProductPreview';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import Cta from './sections/Cta';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <Hero />
        <ProductPreview />
        <Features />
        <HowItWorks />
        <Cta />
      </main>
      
      <Footer />
    </div>
  )
}
