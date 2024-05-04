
import { BrowserRouter as Router , Routes, Route, Link, NavLink, Outlet, useParams } from "react-router-dom";
// import './App.css';
import Header from "./header/header";
import ThemeProvider from "./context/context";

import BasPage from "./footer/basPage";
import Accueil from "./pages/acceuil";
import AnniverMenu from "./pages/anniversaire";
import CadeauxMenu from "./pages/cadeux";
import DeuilMenu from "./pages/deuil";

import OccasionMenu from "./pages/ocassion";
import Exposition from "./pages/exposition";
import CommandeOnligne from "./pages/commande";
import PlantMenu from "./pages/plantes";
import Login from "./components/expos/login";
import FlowerForm from "./components/expos/flowerForm";
import FlowerList from "./components/expos/flowerList";
import FlowerDetailsPage from "./pages/flowerDetailPage";

function App() {

  return (
    <>
    <Router >
      <ThemeProvider>
        <Header/>
      <main >
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/commande" element={<CommandeOnligne/>}/>
          <Route path="/anniversaire" element={<AnniverMenu/>}/>
          <Route path="/cadeaux" element={<CadeauxMenu/>}/>
          <Route path="/deuil" element={<DeuilMenu/>}/>
          <Route path="/plante" element={<PlantMenu/>}/>
          <Route path="/occasion" element={<OccasionMenu/>}/>
          <Route path="/exposition" element={<Exposition/>}/>
          <Route path="/flowerList" element={<FlowerList/>}/>
          <Route path="/ajouterFleurs" element={<Login/>}/> 
          <Route path="/dashboard" element={<FlowerForm/>}/>
          
          <Route path="/flower/:id" element={<FlowerDetailsPage/>} />
          {/* // <Route path="*" element={<NoMatch/>}/> */}
        </Routes>
      </main>

      <div>
        <BasPage/>
      </div>
      </ThemeProvider>
      </Router>
    </>
  )
}

export default App
