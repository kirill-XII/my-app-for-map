import React from 'react'
const button = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5']

const ButtonList = () => {
	return (
		<div>
			{button.map((button, index) => (
				<button key={index}>{button}</button>
			))}
		</div>
	)
}
export default ButtonList
