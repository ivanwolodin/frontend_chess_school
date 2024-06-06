import './Header.css'
import headerItems from '../utils/constants'

const Header = () => {
	return (
		<header className='header__general'>
			<ul className='header__list'>
				{headerItems.map((item, index) => (
					<li key={index} className='header__item'>
						{item}
					</li>
				))}
			</ul>
		</header>
	)
}

export default Header
