// import React from 'react'

// const Item = ({ item }) => {
// 	return (
// 		<div>
// 			<h3>{item.name}</h3>
// 			<p>Price: {item.price}</p>
// 		</div>
// 	)
// }

// export default Item

import React from 'react'

const Item = ({ name, price }) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>Price: {price}</p>
		</div>
	)
}

export default Item
