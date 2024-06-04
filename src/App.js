import './styles/base/base.css';
import './styles/components-style/card.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import Category from './pages/Category';
import Page404 from './pages/Page404';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
