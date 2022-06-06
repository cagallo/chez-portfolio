import './App.scss';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
     <Nav />
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/About' element={<About />} />
       <Route path='/Experience' element={<Experience />} />
       <Route path='/Work' element={<Work />} />
       <Route path='/Contact' element={<Contact />} />
     </Routes>``
      {/* <h2 className='intro'>Hi, my name is</h2>
      <h1 className='name'>Chez Gallo</h1>
      <p className='info'>I am a software developer out of Denver, CO. I studied front-end development at the Turing School of Software and Design and I am currently a full stack engineer at 
        <a href='https://www.coupa.com/' className='hyperlink' target='_blank' rel='noreferrer'> Coupa Software</a>
      .
      </p>
      <button>Get in Touch</button> */}
    </div>
  )
}

export default App;
