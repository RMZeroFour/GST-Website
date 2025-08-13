import { NavLink } from 'react-router';
import logoLight from '../assets/logo/logo_light.svg';
import logoDark from '../assets/logo/logo_dark.svg';

function Footer() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ];

  const navProducts = [
    { to: '/products/ev-charger', label: 'EV Chargers' },
    { to: '/products/inverter', label: 'Inverters' },
    { to: '/products/home-ups', label: 'Home UPS' },
    { to: '/products/battery-charger', label: 'Battery Chargers' },
    { to: '/products/solar-charge-controller', label: 'Solar Charge Controllers' },
    { to: '/products/dc-dc-converter', label: 'DC-DC Converters' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-start">
          {/* Left-aligned Details */}
          <div>
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <NavLink to="/" className="flex items-center space-x-2">
                <img src={logoLight} alt="Logo" className="h-16 md:h-24 dark:hidden" />
                <img src={logoDark} alt="Dark Logo" className="h-16 md:h-24 hidden dark:block" />
              </NavLink>
            </div>

            {/* Contact Info */}
            <div className="mt-2 text-sm">
              <p className="mb-2">📍 Kh. No. 252, Plot No. 51, Village Bamnoli Sector-28, Dwarka, New Delhi-110077</p>
              <p>✉️ <a href="mailto:info@gold-sterling.com" className="hover:text-blue-700 dark:hover:text-blue-500">info@gold-sterling.com</a></p>
            </div>
          </div>

          {/* Right-aligned Links */}
          <div className="grid grid-cols-3 gap-8 text-right mt-8 md:mt-0 w-full md:w-auto">
            {/* Quick Links - 1 column */}
            <div className="col-span-1">
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end
                      className="hover:text-blue-700 dark:hover:text-blue-500"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Products */}
            <div className="col-span-2">
              <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">Our Products</h3>
              <div className="grid grid-cols-2 gap-x-4">
                {navProducts.map((link, index) => (
                  <NavLink
                    key={`${link.to}-${index}`}
                    to={link.to}
                    end
                    className="hover:text-blue-700 dark:hover:text-blue-500 mb-2 block"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Copyright and Back to Top */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-center md:text-left">
          <span className="mb-2 md:mb-0">
            © {new Date().getFullYear()} Gold Sterling Technologies™. All rights reserved.
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-blue-700 dark:hover:text-blue-500 mb-2 block"
          >
            🢁 Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
