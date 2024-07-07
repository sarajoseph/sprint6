import React, { createContext, useEffect, useState } from 'react'
import { BudgetListProps, ProductsProps, products } from '../constants'
import { getTotalBudget } from '../logic/app'

export const CalculatorContext = createContext(null)

export const CalculatorProvider = ({children}) => {	
  const [totalBudget, setTotalBudget] = useState<number>(0)
  const [selectedProducts, setSelectedProducts] = useState<ProductsProps>(products)
  const [budgetList, setBudgetList] = useState<BudgetListProps | undefined>(undefined)

  useEffect(() => {
    const newBudget = getTotalBudget(selectedProducts)
    setTotalBudget(newBudget)
  }, [selectedProducts])

	return (
		<CalculatorContext.Provider value={{selectedProducts, setSelectedProducts, totalBudget, setTotalBudget, budgetList, setBudgetList}}>
			{children}
		</CalculatorContext.Provider>
	)
}