import React from 'react'
import Item from './Item'
import style from './ItemList.module.css'

const items = [
	{ id: 1, name: 'apple', price: 1.0 },
	{ id: 2, name: 'banana', price: 0.5 },
	{ id: 3, name: 'orange', price: 0.75 },
	{ id: 4, name: 'pear', price: 0.8 },
	{ id: 5, name: 'grape', price: 0.9 },
	{ id: 6, name: 'kiwi', price: 1.2 },
]

const ItemList = () => {
	return (
		<div className={style.app}>
			{items.map(item => (
				<Item key={item.id} name={item.name} price={item.price} />
			))}
		</div>
	)
}

export default ItemList
