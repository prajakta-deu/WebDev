import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import './App.css';
import Footer from './components/footer.components';

import Header from './components/header.component';
import Navbar from './components/navbar.components';
import Home from './Home';
import NotFound from './Pages/notfound.Pages';

function App() {
  return (
    <div className="App">

      <Router>
      <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
        <Footer/>
      </Router>

      
      
     
      <NotFound/>
      
     
    </div>
  );
}

export default App;
