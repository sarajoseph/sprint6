import React, { createContext, useEffect, useState } from 'react'
import { ProductsProps, products } from '../constants'
import { updateBudget } from '../logic/app'

export const CalculatorContext = createContext(null)

export const CalculatorProvider = ({children}) => {	
  const [budget, setBudget] = useState<number>(0)
  const [selectedProducts, setSelectedProducts] = useState<ProductsProps>(products)

  useEffect(() => {
    const newBudget = updateBudget(selectedProducts)
    setBudget(newBudget)
  }, [selectedProducts])

	return (
		<CalculatorContext.Provider value={{selectedProducts, setSelectedProducts, budget, setBudget}}>
			{children}
		</CalculatorContext.Provider>
	)
}