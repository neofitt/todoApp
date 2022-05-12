import './Switcher.css';

import {ThemeContext} from './../../context';
import {useContext} from 'react';

function Switcher() {
	const {theme, setTheme} = useContext(ThemeContext);

	const changeTheme = ()=>{
		setTheme(theme==='dark' ? 'light' : 'dark');
	}

	return (
		<div className='switcher' onClick={changeTheme}>
			<img 
				src={`/icon${theme}.svg`} 
				alt='theme switcer icon' 
				width='25' height='25' 
				className='switcher__img'
			/>
		</div>
	);
}

export default Switcher;