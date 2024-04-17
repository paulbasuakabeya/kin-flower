import logo from "../assets/logo.png";
import Kinflower from "../assets/Kinflower.jpg"


const Entete = () => {
 return (
   <div className="flex items-center justify-between px-4 py-3 ">
     {/* Logo */}
     <img src={logo} className="h-8" />

     {/* Nom de l'entreprise */}
     {/* <h1 className="text-lg font-semibold">KIN-FLOWER</h1> */}
     <img src={Kinflower} className="h-8" />

     {/* Icônes de connexion et panier */}
     <div className="flex items-center space-x-4">
       <button className="text-blue-500">Se connecter</button>
       <button className="text-blue-500">Panier</button>
     </div>
   </div>
 );
};

export default Entete;