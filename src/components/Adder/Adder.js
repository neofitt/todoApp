import './Adder.css';
import {useState, useContext, useRef, useEffect} from 'react';
import {TodoContext} from './../../context';

import {guidGenerator} from './../../utils';

const Adder = ()=>{
	const [data, setData] = useState('');
	const {todos, addTodo, order, setOrder} = useContext(TodoContext);

	const handleSubmit = (e)=>{
		e.preventDefault();
		
		if(data){
			addTodo([...todos, {
			id: guidGenerator(),
			text: data,
			done: false,
			isEditing: false,
			order: order
		}]);

		setData('');
		}
		
		setOrder(order+1);
	}

	const inputRef = useRef();

	useEffect (()=>{
		if(inputRef.current){
			inputRef.current.focus();
		}
	}, []);

	return (
		<div className='adder'>
			<form onSubmit={(e)=>handleSubmit(e)}> 
				<label>
					<input
						type='text'
						name='todo'
						placeholder='Create a new todo...'
						value={data}
						onChange={(e)=>setData(e.target.value)}
						className='adder__input'
						ref={inputRef}
					/>
				</label>
			</form>
		</div>
	)
}


export default Adder;