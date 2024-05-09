

/*function Deuil (){
 return(
 
  <div>
  
  </div>
  
 )
}
export default Deuil;*/


import { flowerDeuil } from "../datas/fleurDeuil";


function Deuil (){
  
 return(
 
  <div>

<div className="bg-deuil-texture bg-center h-screen h-full max-h-96">
    <div className="text-center px-6 text-white pt-16">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl ">Fleurs disponibles</h2>
    </div>
</div>


   <div className="plant-gallery mt-12 mx-8">
    <h2 className="text-xl font-semibold mb-4 text-center "></h2>
    <div className="grid grid-cols-4 gap-3 mb-8">
      {flowerDeuil.map((plant) => (
        <div key={plant.id} className="plant-card">
          <img src={plant.cover} alt={plant.name} className="lmj-plant-item-cover cover mb-2 " />
          <div className="flex items-center space-x-4">
          <p className="font-semibold">{plant.name}</p>
          <p className="text-sm text-gray-500">{plant.category}</p>
          <p className="text-sm text-gray-700">${plant.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
  
 )
}
export default Deuil;