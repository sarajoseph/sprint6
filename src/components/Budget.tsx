import React from 'react'
interface BudgetProps {
	budget: number
}
export const Budget = ({budget}:BudgetProps) => {
	return (
		<div>
			Preu pressuposat: {budget}
		</div>
	)
}
