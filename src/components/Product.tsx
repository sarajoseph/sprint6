import React, { useState } from 'react'
import { updateSelectedProducts } from '../logic/app'
import { useSelectedProducts } from '../context/AppContext'

interface ProductProps {
	productID: string
	productName: string
	productDescription: string
	productPrice: number
}

export const Product = ({productID, productName, productDescription, productPrice}: ProductProps) => {
	const { selectedProducts, setSelectedProducts } = useSelectedProducts()
	const [ checkedProduct, setCheckedProduct ] = useState('border-gray-100')

	const handleChange = (productID, checked) => {
		const newSelectedProducts = updateSelectedProducts(selectedProducts, productID, checked)
		setSelectedProducts(newSelectedProducts)
		checked ? setCheckedProduct('border-solid border-primary') : setCheckedProduct('border-gray-100')
	}
	
	return (
		<div className={`flex flex-row justify-between p-10 rounded-2xl shadow-lg border-2 ${checkedProduct}`}>
			<div className="flex flex-col">
				<h2 className="text-3xl font-bold">{productName}</h2>
				<p>{productDescription}</p>
			</div>			
			<div className="text-5xl font-bold">{productPrice}€</div>
			<div className="form-control justify-center">
				<label className="cursor-pointer label">
					<input 
						type="checkbox" 
						className="checkbox [--chkbg:oklch(var(--p))] [--chkfg:oklch(var(--b1))]" 
						onChange={(e) => { handleChange(productID, e.target.checked) }} 
					/>
					<span className="label-text ml-2">Afegir</span>
				</label>
			</div>
		</div>
	)
}