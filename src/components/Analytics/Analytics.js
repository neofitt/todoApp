import './Analytics.css';

import { TodoContext, ShowContext } from '../../context';
import { useContext } from 'react';


const Analytics = ()=>{
	const {todos, clearCompleted} = useContext(TodoContext);
	const {showOption, changeShowOption} = useContext(ShowContext);

	const handleClick = ()=>{
		clearCompleted();
	}

	const countCompleted = ()=>{
		if (todos[0]){
			const k = todos.filter(item=>item.done===false);
			return (`${k.length} items left`); 
		}
		else{
			return ('0 items left')
		}
	}

	return (
		<div className='analytics'>
			
			<div className='analytics--itemsleft'>
				{countCompleted()}
			</div>
			

			<div className='viewmenu'>
				<div 
					onClick={()=>changeShowOption('all')} 
					className={`viewmenu__item ${showOption==='all' ? 'viewmenu__item--active' : ''} `}
				>
					All
				</div>

				<div onClick={()=>changeShowOption('active')} className={`viewmenu__item ${showOption==='active' ? 'viewmenu__item--active' : ''} `}>
					Active
				</div>

				<div onClick={()=>changeShowOption('completed')} className={`viewmenu__item ${showOption==='completed' ? 'viewmenu__item--active' : ''} `}>
					Completed
				</div>
			</div>
			
			
			<div onClick={handleClick} className='analytics--clear'>
				Clear Completed
			</div>

		</div>
	)
}

export default Analytics;