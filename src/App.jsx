import "./App.css";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <h1>Contact</h1> },
    { path: "*", element: <h1>Page not found</h1> },
  ]);
  return (
    <div className='app'>
      <Navigation />
      <div className='content'>{routes}</div>
      <Footer />
    </div>
  );
}

export default App;
