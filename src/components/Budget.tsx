import React, { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'

export const Budget = () => {
	const { budget } = useContext(CalculatorContext)

	return (
		<div>
			Preu pressuposat: {budget}
		</div>
	)
}
