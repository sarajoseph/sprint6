import React, { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'

export const Budget = () => {
	const { budget } = useContext(CalculatorContext)

	return (
		<div className="flex items-end justify-end gap-10 font-bold">
			<span className="text-3xl">Preu pressuposat:</span>
			<span className="text-5xl">{budget}€</span>
		</div>
	)
}
