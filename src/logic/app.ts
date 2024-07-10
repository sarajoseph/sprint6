import { BudgetListProps, ProductsProps, WEB_PRODUCT_ID } from "../constants"

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

export const getBudgetList = (selectedProducts, totalBudget: number, budgetList: BudgetListProps, userName: string, userPhone: string, userEmail: string, annualPayment: boolean) => {
  const budgetProducts = selectedProducts.filter((prod) => prod.selected === true)
  const currentBudgetID: string = budgetList === undefined ? 'budget_1' : 'budget_'+(budgetList.length+1)
  const url: string = getBudgetURL(budgetProducts, annualPayment)
  const currentBudget = {
    id: currentBudgetID,
    userData: {
      name: userName,
      phone: userPhone,
      email: userEmail
    },
    products: budgetProducts,
    total: totalBudget,
    url: url
  }
  const newBudgetList = budgetList !== undefined ? [...budgetList, currentBudget] : [currentBudget]
  return newBudgetList
}

export const getDiscount = (initialPrice: number) => initialPrice - (initialPrice * 0.20)

export const getBudgetURL = (budgetProducts, budgetPayment: boolean) => {
  let url: string = '/budget/'
  budgetProducts.filter((prod) => prod.selected === true).map((product) => {
    url += product.id+'=true&'
    url += product.pages !== undefined ? 'pages='+product.pages+'&' : ''
    url += product.languages !== undefined ? 'lang='+product.languages+'&' : ''
  })
  url += budgetPayment ? 'annual=true' : ''
  url = url.charAt(url.length-1) === '&' ? url.substring(0, url.length - 1) : url
  return url
}

export const openModal = (e: Element) => {
  e.showModal()
}