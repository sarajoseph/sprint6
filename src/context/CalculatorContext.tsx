import React, { createContext, useEffect, useState } from 'react'
import { BudgetListProps, ProductsProps, initialProducts, products } from '../constants'
import { getDiscount, getTotalBudget } from '../logic/app'

export const CalculatorContext = createContext(null)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CalculatorProvider = ({children}: any) => {	
  const [totalBudget, setTotalBudget] = useState<number>(0)
  const [selectedProducts, setSelectedProducts] = useState<ProductsProps>(products)
  const [budgetList, setBudgetList] = useState<BudgetListProps | undefined>(undefined)
  const [annualPayment, setAnnualPayment] = useState<boolean>(false)

  useEffect(() => {
    const newBudget = getTotalBudget(selectedProducts)
    setTotalBudget(newBudget)
  }, [selectedProducts])

  useEffect(() => {
    const newSelectedProducts = selectedProducts.map((p) => {
      const monthlyPrice = initialProducts.filter((product) => product.id === p.id)[0].price
      p.price = annualPayment ? getDiscount(monthlyPrice) : monthlyPrice
      return p
    })
    setSelectedProducts(newSelectedProducts)
  }, [annualPayment])

  return (
    <CalculatorContext.Provider value={{selectedProducts, setSelectedProducts, totalBudget, setTotalBudget, budgetList, setBudgetList, annualPayment, setAnnualPayment}}>
      {children}
    </CalculatorContext.Provider>
  )
}