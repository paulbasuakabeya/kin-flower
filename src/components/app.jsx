import { useState } from 'react'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function AppliPrnc() {
	const [cart, updateCart] = useState([])
	return (
		<div>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
		</div>
	)
}

export default AppliPrnc
