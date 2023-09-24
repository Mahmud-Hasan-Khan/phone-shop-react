
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center justify-between px-4 py-4 shadow'>
                <Logo></Logo>
                <ul className='flex gap-6'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500" : ""}>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500" : ""}>Favorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-500" : ""}>Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;