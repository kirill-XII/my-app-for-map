import React from 'react'

const options = [
	{ value: 'red', label: 'R' },
	{ value: 'green', label: 'Green' },
	{ value: 'blue', label: 'Blue' },
	{ value: 'yellow', label: 'Yellow' },
	{ value: 'purple', label: 'Purple' },
]

const SelectInput = ({ value, onChange }) => {
	return (
		<select value={value} onChange={onChange}>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
}

export default SelectInput
