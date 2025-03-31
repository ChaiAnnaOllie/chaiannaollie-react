import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import DogTraining from './pages/DogTraining';
import TreatShop from './pages/TreatShop';
import RecipeLibrary from './pages/RecipeLibrary';
import TrainingLibrary from './pages/TrainingLibrary';
import Donate from './pages/Donate';
import Blog from './pages/Blog';
import Book from './pages/Book';
import Merch from './pages/Merch';

function App() {
  return (
    <Router>
      <header style={styles.header}>
        <h1 style={styles.logo}>ChaiAnnaOllie</h1>
        <nav style={styles.nav}>
          <Link style={styles.link} to="/">Home</Link>
          <Link style={styles.link} to="/about">About</Link>
          <Link style={styles.link} to="/contact">Contact</Link>
          <Link style={styles.link} to="/testimonials">Testimonials</Link>
          <Link style={styles.link} to="/dog-training">Dog Training</Link>
          <Link style={styles.link} to="/treat-shop">Treat Shop</Link>
          <Link style={styles.link} to="/recipe-library">Recipe Library</Link>
          <Link style={styles.link} to="/training-library">Training Library</Link>
          <Link style={styles.link} to="/donate">Donate</Link>
          <Link style={styles.link} to="/blog">Blog</Link>
          <Link style={styles.link} to="/book">Book</Link>
          <Link style={styles.link} to="/merch">Merch</Link>
        </nav>
      </header>

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/dog-training" element={<DogTraining />} />
          <Route path="/treat-shop" element={<TreatShop />} />
          <Route path="/recipe-library" element={<RecipeLibrary />} />
          <Route path="/training-library" element={<TrainingLibrary />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book" element={<Book />} />
          <Route path="/merch" element={<Merch />} />
        </Routes>
      </main>
    </Router>
  );
}

const styles = {
  header: {
    padding: '1rem',
    backgroundColor: '#f7f7f7',
    borderBottom: '1px solid #ccc',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
  },
  nav: {
    marginTop: '0.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
  main: {
    padding: '2rem',
  },
};

export default App;