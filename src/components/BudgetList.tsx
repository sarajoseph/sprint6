import React, { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import { WEB_PRODUCT_ID } from '../constants'
export const BudgetList = () => {
	const { budgetList } = useContext(CalculatorContext)
	return (
		<>
		{
			budgetList !== undefined && budgetList !== null &&
			<section className="flex flex-col gap-y-10 max-w-3xl mx-auto my-20">
				<h2 className="text-3xl font-bold mb-5">Pressupostos en curs:</h2>
				<>
				{
					budgetList.map((b) => {
						return(
							<div key={b.id} className="p-10 rounded-2xl shadow-lg">
								<div className="flex flex-row flex-wrap gap-5 max-w-full">
									<div className="flex flex-col grow">
										<h3 className="text-3xl font-bold">{b.userData.name}</h3>
										<p>{b.userData.email}</p>
										<p>{b.userData.phone}</p>
									</div>
									<div className="flex flex-col grow">
										<p className="font-bold">Serveis contractats:</p>
										<ul className="list-disc list-inside">
										{
											b.products.map((product) => {
												return (
													product.id === WEB_PRODUCT_ID ? 
														<li key={product.id}>{`${product.name} (${product.pages} pàgines, ${product.languages} llenguatges)`}</li> 
													: 
														<li key={product.id}>{product.name}</li>)
											})
										}
										</ul>
									</div>
									<div className="flex flex-col grow md:items-end">
										<p className="font-bold">Total:</p>
										<p className="text-5xl font-bold">{b.total}€</p>
									</div>
								</div>
							</div>
						)
					})
				}
				</>
			</section>
		}
		</>
	)
}