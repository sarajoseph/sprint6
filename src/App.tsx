import React, { useState } from 'react'
import { Header } from './components/Header'
import { Product } from './components/Product'
import { Budget } from './components/Budget'
import { AppProvider } from './context/AppContext'
import { products } from './constants'

function App() {
  return (
    <AppProvider>
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
                    productPrice={product.price} />
                )
              })
            }
            <Budget/>
        </section>
      </main>
    </AppProvider>
  )
}

export default App
