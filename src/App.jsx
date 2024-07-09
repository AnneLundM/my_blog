import "./App.css";
import Navigation from "./components/navigation/Navigation";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = useRoutes([
    { path: "/", element: <h1>Home</h1> },
    { path: "/about", element: <h1>About</h1> },
    { path: "/contact", element: <h1>Contact</h1> },
    { path: "*", element: <h1>Page not found</h1> },
  ]);
  return (
    <>
      <Navigation />
      {routes}
    </>
  );
}

export default App;
