
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import SobreNosotros from './pages/SobreNosotros';
import Productos from './pages/Productos';
import ServicioTecnico from './pages/ServicioTecnico';
import Contacto from './pages/Contacto';



function App() {
  return (
    <div className="fixedFooter">
      <Router>
        <Switch>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/nosotros'>
            <SobreNosotros />
          </Route>
          <Route path='/productos'>
            <Productos />
          </Route>
          <Route path='/servicio'>
            <ServicioTecnico />
          </Route>
          <Route path='/contacto'>
            <Contacto />
          </Route>
          <Route path='/'>
            <Landing  />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
