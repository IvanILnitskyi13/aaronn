import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

function App() {
    const obj = {
        img: '',
    };
    return (
        <div className='app'>
            <Navigation />
            <Home />
            <About />
            <Portfolio />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;
