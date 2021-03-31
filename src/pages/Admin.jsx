import { Switch } from "react-router-dom";
import AdmNavtop from "../components/AdmNavtop";
import AdmSidebar from "../components/AdmSidebar";
import '../css/admin.css';


export default function Admin() {
  return (
    <>
      <AdmNavtop />
      <AdmSidebar />

      <Switch>
        
      </Switch>
    </>
    
  );
}
