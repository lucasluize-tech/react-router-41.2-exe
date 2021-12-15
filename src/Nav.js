import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/dogs'>All Dogs</NavLink>
      <NavLink to='/dogs/Whiskey'>Whiskey</NavLink>
      <NavLink to='/dogs/Duke'>Duke</NavLink>
      <NavLink to='/dogs/Perry'>Perry</NavLink>
      <NavLink to='/dogs/Tubby'>Tubby</NavLink>
    </nav>
  );
};

export default Nav;
