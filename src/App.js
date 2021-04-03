
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import SobreNosotros from './pages/SobreNosotros';
import Productos from './pages/Productos';
import ServicioTecnico from './pages/ServicioTecnico';
import Contact from './pages/Contact';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState({});

    useEffect(() => {
        if (token) {
            getApi();
        }
    }, [token]);

    const getApi = async () => {
        try {
            const headers = { 'x-auth-token': token };
            const { data } = await axios.get('http://localhost:4000/api/usuarios/usuarioLogueado', {
                headers,
            });
            setUser(data);
        } catch (error) {
            console.log(error);
        }
    };

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
            <Contact />
          </Route>
          <Route path='/'>
            <Landing user={ user } token={ token } setToken={ setToken }  />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
