import React from 'react'

const options = [
	{ value: 'red', label: 'RED' },
	{ value: 'yellow', label: 'YELLOW' },
	{ value: 'black', label: 'BLACK' },
	{ value: 'green', label: 'GREEN' },
	{ value: 'gray', label: 'GRAY' },
]

const Dropdown2 = () => {
	return (
		<select>
			{options.map(option => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
}
export default Dropdown2
