import React from 'react'
import { Header } from '../components/Header'
import { Product } from '../components/Product'
import { Budget } from '../components/Budget'
import { CalculatorProvider } from '../context/CalculatorContext'
import { products } from '../constants'
import { Link } from 'react-router-dom'
export const Calculator = () => {
	return(
		<>
		<CalculatorProvider>
			<main>
				<Header />
				<section className="flex flex-row max-w-3xl mx-auto mt-6">
					<Link to="/" className="btn btn-neutral text-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
						</svg>
					</Link>
				</section>
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
		</CalculatorProvider>
		</>
	)
}