import { NavLink } from "react-router";

function ProductCard({ title, subtitle, image, link }) {
  return (
    <div key={title} className="flex flex-col items-center p-4">
      <NavLink
        to={link}
        className="hover:scale-105 transition-transform duration-300 block"
      >
        <div className="w-64 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg flex flex-col">
          {/* Image */}
          <div className="h-52 w-full relative">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Name and Category */}
          <div className="pt-3 px-4 text-center text-base font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800">
            {title}
          </div>
          <div className="pb-3 px-4 text-center text-base font-medium text-gray-500 dark:text-gray-100/50 bg-white dark:bg-gray-800">
            {subtitle || ''}
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default ProductCard;
