"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";

import CompanyLogoSvg from "./assets/company_logo.svg";
import HamburgerIconSvg from "./assets/hamburger_icon.svg";

export function HeaderBar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const links = [
    { text: "Home", route: "/", },
    { text: "Products", route: "/products", },
    { text: "About", route: "/about", },
    { text: "Contact", route: "/contact", },
  ];

  return (
    <>
      <nav className="mx-auto px-8 h-16 flex flex-row justify-between items-center shadow-md text-gray-800">
        <img
          className="h-full object-scale-down p-2"
          src={CompanyLogoSvg.src}
          alt="Logo of Gold Sterling Technologies"
        />

        <div className="hidden sm:flex space-x-6 text-gray-800">
          {links.map((link, index) => (
            <Link
              key={index}
              className={classNames({
                "hover:text-red-600": true,
                "text-red-500": pathname === link.route,
              })}
              href={link.route}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <button
          className="block sm:hidden"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <img
            src={HamburgerIconSvg.src}
            alt="Toggle menu"
          />
        </button>
      </nav>

      <div
        className={classNames({
          "absolute w-full overflow-hidden sm:hidden": true,
          "transition-[max-height] duration-500 ease-in-out": true,
          "shadow-md": true,
          "max-h-0": !isCollapsed,
          "max-h-60": isCollapsed,
        })}
      >
        <div className="py-4 px-8 flex flex-col bg-gray-100 text-gray-800 space-y-4">
          {links.map((link, index) => (
            <Link
              key={index}
              className={classNames({
                "hover:text-red-600": true,
                "text-red-500": pathname === link.route,
              })}
              href={link.route}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
