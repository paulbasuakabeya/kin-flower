
/*
function PlantMenu (){
 return(
 
  <div>
  
  </div>
  
 )
}
export default PlantMenu;*/
import { useState } from 'react'
import { plantListPlant } from '../datas/plantListPantes' 
import PlantItem from '../components/PlantItem'
import Categories from '../components/Categories'
import '../styles/ShoppingList.css'

function PlantMenu({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantListPlant.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list mt-14'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantListPlant.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id} >
							<PlantItem 
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							{/* <button onClick={() => addToCart(name, price)}>Ajouter</button> */}
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default PlantMenu;
