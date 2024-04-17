const BasPage = () => {
 return (
   <footer className="bg-gray-800 text-gray-300 py-8">
     <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
       {/* Section Liens Utiles */}
       <div className="mb-4 md:mb-0">
         <h3 className="text-lg font-semibold mb-2">Liens Utiles</h3>
         <ul>
           <li className="mb-2"><a href="#">Accueil</a></li>
           <li className="mb-2"><a href="#">Boutique</a></li>
           <li className="mb-2"><a href="#">À propos</a></li>
           <li className="mb-2"><a href="#">Contact</a></li>
         </ul>
       </div>

       {/* Section Coordonnées */}
       <div className="mb-4 md:mb-0">
         <h3 className="text-lg font-semibold mb-2">Coordonnées</h3>
         <p>123 Rue des Fleurs</p>
         <p>Ville, Pays</p>
         <p>Téléphone: +123 456 789</p>
         <p>Email: contact@monsite.com</p>
       </div>

       {/* Section Réseaux Sociaux */}
       <div>
         <h3 className="text-lg font-semibold mb-2">Suivez-nous</h3>
         <div className="flex space-x-4">
           <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook"></i></a>
           <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></a>
           <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a>
           <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-pinterest"></i></a>
         </div>
       </div>
     </div>

     {/* Bas de Footer */}
     <div className="border-t border-gray-600 mt-4 pt-4 text-center">
       <p>&copy; {new Date().getFullYear()} Ma Boutique de Fleurs en Ligne. Tous droits réservés.</p>
     </div>
   </footer>
 );
};

export default BasPage;