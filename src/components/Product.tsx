import React from 'react'

interface ProductProps {
	productID: string
	productName: string
	productDescription: string
	productPrice: number
	updateProductsSelected: void
}
export const Product = ({productID, productName, productDescription, productPrice, updateProductsSelected}: ProductProps) => {
	return (
		<div className="flex flex-row justify-between p-10 rounded-2xl shadow-lg">
			<div className="flex flex-col">
				<h2 className="text-3xl font-bold">{productName}</h2>
				<p>{productDescription}</p>
			</div>			
			<div className="text-5xl font-bold">{productPrice}€</div>
			<div className="form-control justify-center">
				<label className="cursor-pointer label">
					<input type="checkbox" className="checkbox [--chkbg:oklch(var(--p))] [--chkfg:oklch(var(--b1))]" onChange={(e) => {updateProductsSelected(productID, e.target.checked) }} />
					<span className="label-text ml-2">Afegir</span>
				</label>
			</div>
		</div>
	)
}