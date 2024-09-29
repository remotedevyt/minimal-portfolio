import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from './pages/Projects';
import Project from './pages/Project';
import Nopage from "./pages/Nopage";
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<Project />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div className='mx-auto p-2 md:max-w-2xl text-gray-50'>
    //   <Nav></Nav>
    // </div>
  )
}

export default App
