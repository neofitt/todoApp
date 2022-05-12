import './EditInput';

import { useState, useContext, useEffect, useRef } from 'react';
import {TodoContext} from './../../context';

const EditInput = ({text, id})=>{
	const [inputState, setInputState] = useState(text);
	const {editTodo} = useContext(TodoContext);
	

	const handleSubmit = (e, id)=>{
		e.preventDefault();
		editTodo(id, inputState);
	}

	const inputRef = useRef();

	useEffect (()=>{
		if(inputRef.current){
			inputRef.current.focus();
		}
	}, []);

	
	return (
		<div className='editInput'>
			<form onSubmit={(e)=>handleSubmit(e, id, inputState)}>
				<input
					type='text'
					name='todo'
					value={inputState}
					className='adder__input'
					onChange={(e)=>setInputState(e.target.value)}
					ref={inputRef}
				/>
			</form>
		</div>
	)
}


export default EditInput;