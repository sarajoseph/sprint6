import React, { useContext } from 'react'
import { Product } from './Product'
import { CalculatorContext } from '../context/CalculatorContext'

export const ProductsList = () => {
	const { selectedProducts } = useContext(CalculatorContext)
	return (
	<>
		{
			selectedProducts.map((product) => {
				return <Product
					key={product.id}
					productID={product.id}
					productName={product.name}
					productDescription={product.description}
					productPrice={product.price} />
			})
		}
	</>
	)
}