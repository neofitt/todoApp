import './Switcher.css';

import {ThemeContext} from './../../context';
import {useContext} from 'react';
import {FaMoon} from 'react-icons/fa';
import {BsSunFill} from 'react-icons/bs';


function Switcher() {
	const {theme, setTheme} = useContext(ThemeContext);

	const changeTheme = ()=>{
		setTheme(theme==='dark' ? 'light' : 'dark');
	}

	return (
		<div className='switcher' onClick={changeTheme}>
			{theme==='dark' ? <FaMoon width='30' height='30' className='switcher__img' /> : <BsSunFill width='30' height='30' className='switcher__img'/> }
			{/* <img 
				src={`/icon${theme}.svg`} 
				alt='theme switcer icon' 
				width='25' height='25' 
				className='switcher__img'
			/> */}
		</div>
	);
}

export default Switcher;