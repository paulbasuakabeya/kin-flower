import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <>
            <nav className="flex justify-between">
               
                <NavLink to="/">Accueil</NavLink>
                
                <NavLink to="/commande">Commande</NavLink>
                
                <NavLink to="/deuil">Deuil</NavLink>
                
               <NavLink to="/plante">Plantes</NavLink>
    
                <NavLink to="/cadeaux">Cadeaux</NavLink>
                
                <NavLink to="/anniversaire">Anniversaire</NavLink>
               
                <NavLink to="/occasion">Occasion</NavLink>
               
                <NavLink to="/exposition">Exposition</NavLink>

            </nav>
           
            
        </>
    );
}

export default NavBar;


