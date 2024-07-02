import { ProductsProps } from "../constants"

export const updateSelectedProducts = (selectedProducts: ProductsProps, productID: string, checked: boolean): ProductsProps => {
	const newSelectedProducts = selectedProducts.map((product) => {
	 if (product.id === productID) {
		 product.selected = checked
	 }
	 return product
	})
	return newSelectedProducts
}

export const updateBudget = (selectedProducts: ProductsProps): number => {
	let newBudget = 0
	selectedProducts.map((product) => {
		if (product.selected === true) {
			newBudget += product.price
		}      
	})
	return newBudget
}