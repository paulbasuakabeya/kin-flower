import { plantList } from "../datas/plantList";

function CadeauxMenu (){
 return (
  // <div className="">
     <div className="plant-gallery mt-12 mx-8">
    <h2 className="text-xl font-semibold mb-4 text-center ">Plantes disponibles</h2>
    <div className="grid grid-cols-3 gap-4 mb-8">
      {plantList.map((plant) => (
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
  // </div>
 
);
}
export default CadeauxMenu;