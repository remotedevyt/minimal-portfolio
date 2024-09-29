import { Outlet, Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav> */}
      
      <div className="mx-auto relative p-2 md:max-w-2xl text-gray-400">
        <Nav />
        <Outlet />
        <Footer />
      </div>
      
    </>
  )
};

export default Layout;