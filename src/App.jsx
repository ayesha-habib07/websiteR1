import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Companies from './components/companies/Companies';
import Resendencies from './components/Resendencies/Resendencies';
import Value from './components/value/Value';
import Contact from './components/contact/Contact';
import GetStarted from './components/getStarted/GetStarted';
import Footer from './components/footer/Footer';
function App() {


  return (
    <>
    <div className='App'>
    <Header/>
    <Hero/>
    <Companies/>
    <Resendencies/>
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>
    </div>
    </>
  )
}

export default App
