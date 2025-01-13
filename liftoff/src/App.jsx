import Nav from './components/Nav';
import NavMovile from './components/NavMovile';
import Landing from './components/Landing';
import Courses from './components/Courses';
import Features from './components/Features';
import Mike from './components/Mike';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className='bg overflow-visible overflow-x-hidden'>
      <Nav />
      <NavMovile />
      <main>
        <Landing />
        <Courses />
        <Features />
        <Mike />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
