import { ProductsProps, WEB_PRODUCT_ID } from "../constants"

export const getSelectedProducts = (selectedProducts: ProductsProps, productID: string, checked: boolean): ProductsProps => {
	const newSelectedProducts = selectedProducts.map((product) => {
		if (product.id === productID) {
			product.selected = checked
		}
		return product
	})
	return newSelectedProducts
}

export const getWebFields = (selectedProducts: ProductsProps, qnty_npt_id: string, inputNumber: number) => {
	const newSelectedProducts = selectedProducts.map((product) => {
		if (product.id === WEB_PRODUCT_ID) {
			product[qnty_npt_id] = inputNumber
		}
		return product
	})
	return newSelectedProducts
}

export const getTotalBudget = (selectedProducts: ProductsProps): number => {
	let newBudget = 0
	selectedProducts.map((product) => {
		if (product.selected === true) {
			newBudget += product.price
			if (product.id === WEB_PRODUCT_ID) {
				newBudget += (product.pages + product.languages) * 30
			}			
		}      
	})
	return newBudget
}

export const getBudgetList = (selectedProducts, totalBudget, budgetList, userName, userPhone, userEmail) => {
	const budgetProducts = selectedProducts.filter((prod) => prod.selected === true)
	const currentBudgetID = budgetList === undefined ? 'budget_1' : 'budget_'+(budgetList.length+1)
	const currentBudget = {
		id: currentBudgetID,
		userData: {
			name: userName,
			phone: userPhone,
			email: userEmail
		},
		products: budgetProducts,
		total: totalBudget
	}
	const newBudgetList = budgetList !== undefined ? [...budgetList, currentBudget] : [currentBudget]
	return newBudgetList
}

export const getDiscount = (initialPrice: number) => initialPrice - (initialPrice * 0.20)