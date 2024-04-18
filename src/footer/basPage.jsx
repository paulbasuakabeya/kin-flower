const BasPage = () => {
 return (
   <footer className="bg-customBg text-gray-300 py-4">
   
   <div className="bg-basde-texture bg-center h-screen h-full max-h-96">
    <div class="text-center px-6 text-white pt-16">
        <h2 class="text-4xl font-bold tracking-tight sm:text-6xl ">Work with us</h2>
        <div className="marquee-container">
      <div className="marquee-content">
        <span className="text-2xl text-white"> Nous sommes une plate-forme ouverte pour faciliter tous les fleuristes de la ville à vendre leurs produits à tout le monde. </span>
      </div>
    </div>
    </div>
</div>

    <div class="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6  space-x-7 bg-customColor">

   
    <div class=" max-w-md mx-auto   rounded-lg overflow-hidden  ">
        <img src="src/assets/slide.png" alt="slide" class="mx-auto w-48 h-48 rounded-full mb-4"/>
        <div class="p-6 rounded-lg text-center">
            <p class="text-3xl font-bold mb-2 text-black ">Satisfait, ou relivré.</p>
            <p class="text-black">La plante ou le bouquet reçu n'est pas conforme à votre commande ? Nous re-livrons gratuitement et avec toutes nos excuses !</p>
        </div>
    </div>
   
   
    <div class="max-w-md mx-auto   rounded-lg overflow-hidden  ">
        <img src="src/assets/slide1.png" alt="slide1" class=" mx-auto w-48 h-48 rounded-full mb-4"/>
        <div class="p-6 rounded-lg text-center">
            <p class="font-bold text-3xl mb-2 text-black">Création par un artisan fleuriste.</p>
            <p class="text-black">Un service de qualité, un réseau d'artisans fleuristes d'exception garantissant une livraison de proximité.</p>
        </div>
    </div>

    
    <div class="max-w-md mx-auto   rounded-lg overflow-hidden">
        <img src="src/assets/slider2.png" alt="slider2" class=" mx-auto w-48 h-48 rounded-full mb-4 "/>
        <div class="p-6 rounded-lg text-center">
            <p class="font-bold text-3xl mb-2 text-black">Partout, tout le temps.</p>
            <p class="text-black">Parce qu’une envie de fleurs n’attend pas, nos artisans fleuristes confectionnent et livrent avec le plus grand soin vos bouquets 7 jours sur 7, en moins de 4h.</p>
        </div>
    </div>
</div>
    <div className="bg-custom-background bg-center h-screen h-full max-h-48">
      
    </div>
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
       <p>&copy; {new Date().getFullYear()} Kin-flowers en Ligne. Tous droits réservés.</p>
     </div>
   </footer>
 );
};

export default BasPage;