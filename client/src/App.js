/**
 * Style Imports
 */
import './App.css';
/**
 * Components Imports
 */
import NavBar from './components/navBar';
import Footer from './components/footer';

import Catalog from './pages/catalog';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">

      <NavBar />
      <Catalog />

      <Footer />
    </div>
  );
}

export default App;
