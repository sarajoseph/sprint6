import React, { createContext, useContext, useEffect, useState } from 'react'
import { ProductsProps, products } from '../constants'
import { updateBudget } from '../logic/app'

export const AppContext = createContext(null)

export function useSelectedProducts() {
	const { selectedProducts, setSelectedProducts } = useContext(AppContext)
	return { selectedProducts, setSelectedProducts }
}

export function useBudget() {
	const { budget, setBudget } = useContext(AppContext)
	return { budget, setBudget }
}

export const AppProvider = ({children}) => {	
  const [budget, setBudget] = useState<number>(0)
  const [selectedProducts, setSelectedProducts] = useState<ProductsProps>(products)

  useEffect(() => {
    const newBudget = updateBudget(selectedProducts)
    setBudget(newBudget)
  }, [selectedProducts])

	return (
		<AppContext.Provider value={{selectedProducts, setSelectedProducts, budget, setBudget}}>
			{children}
		</AppContext.Provider>
	)
}