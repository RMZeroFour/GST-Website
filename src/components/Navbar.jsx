import { useState } from 'react';
import { NavLink } from 'react-router';
import logoLight from '../assets/logo/logo_light.svg';
import logoDark from '../assets/logo/logo_dark.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className='bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto px-4 py-2'>
        {/* Logo */}
        <NavLink to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src={logoLight} className='h-10 dark:hidden' alt='Light Logo' />
          <img src={logoDark} className='h-10 hidden dark:block' alt='Dark Logo' />
        </NavLink>

        {/* Desktop Nav */}
        <ul className='hidden md:flex space-x-4 font-medium'>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) => `block py-2 px-3 rounded-sm transition-colors ${isActive
                    ? 'text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500'}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        >
          <span className='sr-only'>Open main menu</span>
          <svg className='w-5 h-5' fill='none' viewBox='0 0 17 14' xmlns='http://www.w3.org/2000/svg'>
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15' />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='md:hidden absolute top-16 right-4 bg-white dark:bg-gray-900 text-white rounded-lg shadow-lg py-2 z-30 w-40 border border-gray-600'>
          <ul className='flex flex-col space-y-2 px-4'>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end
                  onClick={() => setIsOpen(false)} // close menu after click
                  className={({ isActive }) => `block py-1 transition-colors ${isActive
                      ? 'text-blue-700 dark:text-blue-500 font-semibold'
                      : 'text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500'}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
