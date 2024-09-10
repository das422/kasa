import './navbar.scss'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    const currentRoute = window.location.pathname;

    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li className={currentRoute === '/' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <NavLink  to='/'>
                        Accueil
                    </NavLink>
                </li>
                <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <NavLink  to='/about'>
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
