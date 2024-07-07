import React, { useContext, useState } from 'react'
import { getSelectedProducts } from '../logic/app'
import { CalculatorContext } from '../context/CalculatorContext'
import { Web } from './Web'
import { WEB_PRODUCT_ID } from '../constants'

interface ProductProps {
	productID: string
	productName: string
	productDescription: string
	productPrice: number
}

export const Product = ({productID, productName, productDescription, productPrice}: ProductProps) => {
	const { selectedProducts, setSelectedProducts } = useContext(CalculatorContext)
	const [ borderClass, setBorderClass ] = useState('border-gray-100')
	const [ checkedProduct, setCheckedProduct ] = useState(false)

	const handleChange = (productID, checked) => {
		const newSelectedProducts = getSelectedProducts(selectedProducts, productID, checked)
		setSelectedProducts(newSelectedProducts)
		checked ? setBorderClass('border-solid border-primary') : setBorderClass('border-gray-100')
		setCheckedProduct(checked)
	}
	
	return (
		<div className={`p-10 rounded-2xl shadow-lg border-2 ${borderClass}`}>
			<div className="flex flex-row flex-wrap justify-between">
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
			{
				(checkedProduct && productID === WEB_PRODUCT_ID) && <Web />
			}
		</div>
	)
}