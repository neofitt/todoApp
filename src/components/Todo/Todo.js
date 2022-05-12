import './Todo.css';

import { useContext, useEffect } from 'react';
import {TodoContext, DragContext} from './../../context';

import EditInput from './../EditInput/EditInput';

import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';

const Todo = ({id, text, done, isEditing})=>{
	const {markDone, deleteTodo, setEditMode} = useContext(TodoContext);

	const {setWhatDrag, setWhereDrag, reorderTodo} = useContext(DragContext);

	useEffect(()=>{
		setEditMode(false);
	}, []);

	const changeDone = ()=>{
		markDone(id);
	}

	function handleDragStart(e, id) {
		setWhatDrag(id);
	}

	function handleDrop(e, id) {
		//e.preventDefault();
		e.target.style='';
		setWhereDrag(id);
	}	

	const handleDragOver = (e, id)=>{
		e.preventDefault();
	}

	const handleDragLeave = (e, id)=>{
		// console.log('handleDragLeave');
	}

	const handleDragEnd = (e)=>{
		reorderTodo();
	}


	return (
		<div className='todo' draggable={true}
			onDragStart={(e)=>handleDragStart(e, id)}
			onDragLeave={(e)=>handleDragLeave(e, id)}
			onDragEnd={(e)=>handleDragEnd(e, id)}
			onDragOver={handleDragOver}
			onDrop={e=>handleDrop(e, id)}
			
		>
			<div className="todo__checkbox" onChange={()=>changeDone()}>
				<input type="checkbox" checked={done} id={id} readOnly/>
				<label htmlFor={id}></label>
			</div>

			<div className={`todo__text ${done ? 'todo__text--done' : ''}`}>
				{isEditing? <EditInput text={text} id={id} /> : <p>{text}</p>}
			</div>

			<div className='iconButton'>
				<AiFillEdit className='iconButton__icon' onClick={()=>setEditMode(id)} />
				<AiOutlineDelete className='iconButton__icon' onClick={()=>deleteTodo(id)}/>
			</div>
		</div>
	)
}

export default Todo;