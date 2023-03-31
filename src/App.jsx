import Dropdown from './components/Dropdown'
import ItemList from './components/ItemList'
import Table from './components/Table'
import ButtonList from './components/ButtonList'
import SelectInput from './components/SelectInput'
import Dropdown2 from './components/Dropdown2'
import UserInfo from './components/UserInfo'
import TodoList from './components/TodoList'

function App() {
	return (
		<div>
			<ItemList />
			<Dropdown />
			<Table />
			<ButtonList />
			<SelectInput />
			<Dropdown2 />
			<UserInfo name='Jon Popon' age='30' />
			<TodoList />
		</div>
	)
}

export default App
