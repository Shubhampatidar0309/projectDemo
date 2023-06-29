
import About from './About';
import './App.css';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Review from './Review';

function App() {
  return (
    <div className='heroBgImage min-w-full overflow-hidden'>
      <div className="max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero/>
      </div>
      <About/>
      <Pricing/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
