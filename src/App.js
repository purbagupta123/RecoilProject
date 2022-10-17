import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import Home from './screens/Home';
import About from './screens/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
  </BrowserRouter>
  );
}


function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="home">home</Link> <br/>
        <Link to="about">about</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
