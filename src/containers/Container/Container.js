import './Container.css';

import Header from './../../components/Header/Header';
import Adder from './../../components/Adder/Adder';
import TodoList from './../TodoList/TodoList';
import Attribution from './../../components/Attribution/Attribution';

const Container = ()=>{
	return (
		<>
			<div className='container'>
				<Header />
				<Adder />
				<TodoList />
			</div>
			<Attribution />
		</>
	)
}

export default Container;

