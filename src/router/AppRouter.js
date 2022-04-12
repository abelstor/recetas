import { Routes, Route } from 'react-router-dom';

import { Home } from '../components/Home';
import { About } from '../components/About';
import { Navbar } from '../components/Navbar';
import { Recipes } from '../components/Recipes';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const AppRouter = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
