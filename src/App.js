import './assets/css/App.css';

// Importar componentes

import Header from './components/Header';
import Slyder from './components/Slyder';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPrueba from './components/SeccionPrueba';

function App() {
 
  
  
  return (
    <div className="app">
      <Header/>
      <Slyder/>
     
      
      <div className="center">
            <SeccionPrueba/>
            <Sidebar/>
        <div className='clearfix'></div>
     </div>
      <Footer/>
    </div>
  );
}

export default App;
