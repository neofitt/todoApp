import './TodoList.css';
import { useContext } from 'react';
import { TodoContext, ShowContext } from './../../context';


import Todo from './../../components/Todo/Todo';
import Analytics from './../../components/Analytics/Analytics';
import Informer from './../../components/Informer/Informer';
import TextInfo from './../../components/TextInfo/TextInfo';

const TodoList = ()=>{
	const {todos} = useContext(TodoContext);
	const {showOption} = useContext(ShowContext);
	
	const sortCards = (a, b)=>{
		if(a.order > b.order){
			return 1;
		} else {
			return -1;
		}
	}

	const renderTodos = ()=>{
		if (showOption==='active'){
			return todos.filter(t => t.done===false).sort(sortCards).map(el=>
				(
					<Todo 
						key={el.id}
						text={el.text}
						done={el.done}
						id={el.id}
						isEditing={el.isEditing}

					/>
				))
		}

		else if (showOption==='completed'){
			const res = todos.filter(t => t.done===true).sort(sortCards).map(el=>
				(
					<Todo 
						key={el.id}
						text={el.text}
						done={el.done}
						id={el.id}
						isEditing={el.isEditing}
					/>
				));
			if(res.length){
				return res;
			}
			else{
				return (
					<>
						<Informer text={'Get ready for greatness...'} />
					</>
				)
			}
			
			
		}

		else{
			return todos.sort(sortCards).map(el=>	
					(<Todo 
						key={el.id}
						text={el.text}
						done={el.done}
						id={el.id}
						isEditing={el.isEditing}
					/>)
				)
		}

	}


if (!todos[0]){	
		return (
			<div className='info'>
				We were destined for great things... 
			</div>
		)
	}  
	else {
		return (
			<>
				<div className='todolist'>
					{renderTodos()}
					
					<Analytics />
				</div>	
				{todos.length>0 ? <TextInfo text={'Drag and drop to reorder list'} /> : '' }
			</>
		)
	}
}
export default TodoList;