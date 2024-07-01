import React, { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Product } from './components/Product'
import { Budget } from './components/Budget'

const products = [
  {
    'id': 'product01',
    'name': 'Seo',
    'description': 'Programació d\'una web responsive completa',
    'price': 300,
    'selected': false
  },
  {
    'id': 'product02',
    'name': 'Ads',
    'description': 'Programació d\'una web responsive completa',
    'price': 400,
    'selected': false
  },
  {
    'id': 'product03',
    'name': 'Web',
    'description': 'Programació d\'una web responsive completa',
    'price': 500,
    'selected': false
  },
]

function App() {
  const [budget, setBudget] = useState(0)
  const [productsSelected, setProductsSelected] = useState(products)

  useEffect(() => {
    updateBudget()
  }, [productsSelected])

  const updateProductsSelected = (productID: string, checked: boolean) => {
   const newProductsSelected = productsSelected.map((product) => {
    if (product.id === productID) {
      product.selected = checked
    }
    return product
   })
   setProductsSelected(newProductsSelected)
  }

  const updateBudget = () => {
    let newBudget = 0
    productsSelected.map((product) => {
      if (product.selected === true) {
        newBudget += product.price
      }      
    })
    setBudget(newBudget)
  }

  return (
    <main>
      <Header />
      <section className="flex flex-col gap-y-10 max-w-3xl mx-auto my-20">
        {
          products.map((product) => {
            return (
              <Product
                key={product.id}
                productID={product.id}
                productName={product.name}
                productDescription={product.description}
                productPrice={product.price}
                updateProductsSelected={updateProductsSelected} />
            )
          })
        }
        <Budget
          budget={budget}/>
      </section>
    </main>
  )
}

export default App
