import './Header.css';
import Switcher from './../Switcher/Switcher';


const Header = ()=>{

	return (
		<div className='header'>
			<div className='header__logo'>
				<h1>TODO</h1>
			</div>
			
			<Switcher />
		</div>
	)
}


export default Header;