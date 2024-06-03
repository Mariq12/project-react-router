import './styles/base/base.css';
import './styles/components-style/card.css';
import About from './pages/About';
import Home from './pages/Home';
import Post from './pages/Post';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
