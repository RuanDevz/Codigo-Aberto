import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NewsDetail from './components/NewsDetail';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tema/:tema" element={<Home />} /> {/* Rota para temas */}
        <Route path="/noticia/:slug" element={<NewsDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
