import React from 'react'
import { useBudget } from '../context/AppContext'

export const Budget = () => {
	const { budget } = useBudget()

	return (
		<div>
			Preu pressuposat: {budget}
		</div>
	)
}
