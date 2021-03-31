import { Route, Switch } from "react-router-dom";
import AdmNavtop from "../components/AdmNavtop";
import AdmProducts from "../components/AdmProducts";
import AdmSidebar from "../components/AdmSidebar";
import AdmUsers from "../components/AdmUsers";
import '../css/admin.css';


export default function Admin() {
  return (
    <>
      <AdmNavtop />
      <div className="d-flex">
        <AdmSidebar />
          <Switch>
          <Route path='/admin/users'>
            <AdmUsers />
          </Route>
          <Route path='/admin/products'>
            <AdmProducts />
          </Route>
          </Switch>

      </div>

    </>
    
  );
}
