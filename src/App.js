import './assets/css/App.css';

// Importar componentes

import Header from './components/Header';
import Slyder from './components/Slyder';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


import Route from './Router'
function App() {
 
  var btnString = "Leer más" 
  
  return (
    <div className="app">
      <Header/>
      <Slyder 
        title = "Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
        btn = {btnString}
      />
     
      
      <div className="center">
        <Route/>
           {/* 
            <Peliculas/>
            <Sidebar/>
          */}
          <Sidebar/>
        <div className='clearfix'></div>
     </div>
      <Footer/>
    </div>
  );
}

export default App;
