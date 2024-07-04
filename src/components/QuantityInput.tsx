import React, { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import { updateWebFields } from '../logic/app'
interface QuantityInputProps {
	qnty_npt_id: string
	label: string
}

export const QuantityInput = ({qnty_npt_id, label}: QuantityInputProps) => {
	const { selectedProducts, setSelectedProducts } = useContext(CalculatorContext)
	const setInputValue = (operation: string) => {
		const eQuantityInput: HTMLElement = document.getElementById(qnty_npt_id) as HTMLElement
		const input: HTMLInputElement = eQuantityInput.querySelector('input') as HTMLInputElement
		if (operation === 'addition') {
			input.value = (input.valueAsNumber + 1).toString()
		} else if (operation === 'substraction') {
			if(input.valueAsNumber > 1) {
				input.value = (input.valueAsNumber - 1).toString()
			}
		}
		input.setAttribute('value', input.value)
		input.addEventListener('change', () => {
			const newSelectedProducts = updateWebFields(selectedProducts, qnty_npt_id, input.valueAsNumber)
			setSelectedProducts(newSelectedProducts)
		} );
		const event = new Event('change');
		input.dispatchEvent(event);
	}
	return (
		<div id={qnty_npt_id} className="flex flex-row items-center gap-x-4">
			<p className="w-full">{label}</p>
			<div className="flex flex-row gap-x-1">
				<button className="btn btn-circle btn-xs"
					onClick={() => setInputValue('substraction')}>➖</button>
				<input
					type="number"
					placeholder="1"
					className="input input-bordered input-xs w-12 focus:outline-none text-center"
					defaultValue="1"
					readOnly />
				<button className="btn btn-circle btn-xs"
					onClick={() => setInputValue('addition')}>➕</button>
			</div>
		</div>
	)
}