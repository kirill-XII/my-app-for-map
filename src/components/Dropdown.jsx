import React from 'react'
const options = [
	{ value: 'red', label: 'Red' },
	{ value: 'green', label: 'Green' },
	{ value: 'blue', label: 'Blue' },
	{ value: 'yellow', label: 'Yellow' },
	{ value: 'purple', label: 'Purple' },
]

const Dropdown = () => {
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

export default Dropdown

// import React from 'react'
// const images = [
// 	{ id: 1, src: '', alt: 'Image 1' },
// 	{ id: 2, src: '', alt: 'Image 2' },
// 	{ id: 3, src: '', alt: 'Image 3' },
// 	{ id: 4, src: '', alt: 'Image 4' },
// 	{ id: 5, src: '', alt: 'Image 5' },
// ]

// const ImageList = () => {
// 	return (
// 		<div>
// 			{images.map(image => (
// 				<img key={image.id} src={image.src} alt={image.alt} />
// 			))}
// 		</div>
// 	)
// }
