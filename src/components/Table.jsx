import React from 'react'

const data = [
	{ id: 1, name: 'Jone Doe', email: 'johndoe@examle.com' },
	{ id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
	{ id: 3, name: 'Bob Smith', email: 'bobsmith@example.com' },
	{ id: 4, name: 'Alice Smith', email: 'alicesmith@example.com' },
]

const Table = () => {
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{data.map(row => (
					<tr key={row.id}>
						<td>{row.id}</td>
						<td>{row.name}</td>

						<td>{row.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
export default Table
