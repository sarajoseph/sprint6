import React, { useContext, useEffect, useState } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import { DATE_ASCENDING, DATE_DESCENDING, NAME_ASCENDING, NAME_DESCENDING, TOTAL_ASCENDING, TOTAL_DESCENDING, WEB_PRODUCT_ID } from '../constants'
import { ChevronDown, ChevronUp } from './ChevronIcons'
export const BudgetList = () => {
	const { budgetList } = useContext(CalculatorContext)
	const [sortState, setSortState] = useState<string>('none')
	const [totalState, setTotalState] = useState<string>(TOTAL_ASCENDING)
	const [dateState, setDateState] = useState<string>(DATE_ASCENDING)
	const [nameState, setNameState] = useState<string>(NAME_ASCENDING)
	const [totalCSSClass, setTotalCSSClass] = useState<string>('')
	const [dateCSSClass, setDateCSSClass] = useState<string>('')
	const [nameCSSClass, setNameCSSClass] = useState<string>('')
	const sortMethods = {
		none: { method: (a, b) => null },
		total_ascending: { method: (a, b) => a.total - b.total },
		total_descending: { method: (a, b) => b.total - a.total },
		date_ascending: { method: (a, b) => a.id > b.id ? 1 : -1 },
		date_descending: { method: (a, b) => (a.id < b.id ? 1 : -1) },
		name_ascending: { method: (a, b) => (a.userData.name.toLowerCase() < b.userData.name.toLowerCase() ? -1 : 1) },
		name_descending: { method: (a, b) => (a.userData.name.toLowerCase() > b.userData.name.toLowerCase() ? -1 : 1) }
  }
	useEffect(() => {
		toggleSortButtons()
  }, [sortState])
	const handleClick = (filter: string) => {
		switch(filter){
			case 'total':
				setSortState(totalState)
				totalState === TOTAL_ASCENDING ? setTotalState(TOTAL_DESCENDING) : setTotalState(TOTAL_ASCENDING)
				break
			case 'date':
				setSortState(dateState)
				dateState === DATE_ASCENDING ? setDateState(DATE_DESCENDING) : setDateState(DATE_ASCENDING)
				break
			case 'name':
				setSortState(nameState)
				nameState === NAME_ASCENDING ? setNameState(NAME_DESCENDING) : setNameState(NAME_ASCENDING)
				break
		}
	}
	const toggleSortButtons = () => {
		switch (sortState) {
			case TOTAL_ASCENDING:
			case TOTAL_DESCENDING:
				setTotalCSSClass('font-bold')
				setDateCSSClass('')
				setNameCSSClass('')
				break
			case DATE_ASCENDING:
			case DATE_DESCENDING:
				setDateCSSClass('font-bold')
				setTotalCSSClass('')
				setNameCSSClass('')
				break
			case NAME_ASCENDING:
			case NAME_DESCENDING:
				setNameCSSClass('font-bold')
				setTotalCSSClass('')
				setDateCSSClass('')
				break
			default:
				setTotalCSSClass('')
				setDateCSSClass('')
				setNameCSSClass('')
		}
	}
	return (
		<>
		{
			budgetList !== undefined && budgetList !== null &&
			<section className="flex flex-col gap-y-5 max-w-3xl mx-auto my-20">
				<h2 className="text-3xl font-bold">Pressupostos en curs:</h2>
				<div className="flex justify-end gap-5">
					<label className="input input-bordered flex items-center gap-2 max-w-full md:max-w-[25%]">
						<input type="text" className="w-full" placeholder="Buscar..." />
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
						</svg>
					</label>
					<button className={`flex items-center gap-1 ${dateCSSClass}`} onClick={() => handleClick('date')}>
						<span>Data</span> 
						{
							(dateCSSClass.trim() !== '') && (dateState === DATE_ASCENDING ? <ChevronUp /> : <ChevronDown />)
						}
					</button>						
					<button className={`flex items-center gap-1 ${totalCSSClass}`} onClick={() => handleClick('total')}>
						<span>Import</span> 
						{
							(totalCSSClass.trim() !== '') && (totalState === TOTAL_ASCENDING ? <ChevronUp /> : <ChevronDown />)
						}
					</button>
					<button className={`flex items-center gap-1 ${nameCSSClass}`} onClick={() => handleClick('name')}>
						<span>Nom</span> 
						{
							(nameCSSClass.trim() !== '') && (nameState === NAME_ASCENDING ? <ChevronUp /> : <ChevronDown />)
						}
					</button>
				</div>
				<>
				{
					budgetList.sort(sortMethods[sortState].method).map((b) => {
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