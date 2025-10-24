"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import INav from '@/interfaces/INav';

import NavMenuItem from './NavMenuItem';

type PageT = 'home' | 'artists' | 'concerts';

const getCurrentPage = (): PageT => {
  const pathname = window.location.pathname;
  const parts = pathname.split('/').filter(part => part !== '');
  const page = parts[0] || 'home';

  // Ensure the page is one of the valid options
  if (page === 'home' || page === 'artists' || page === 'concerts') {
    return page;
  }

  // Default to "home" if the page is unknown
  return 'home';
};

const Nav: React.FC<INav> = ({ data: [menu, settingsArr] }) => {
  const settings = settingsArr?.[0] || {};

  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);

  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("/");

  let currentPage: PageT = 'home';

  const handleMenuItemClick = (e: any) => {
    setSelectedMenuItem(e.target.id);
  };
  
  useEffect(() => {
    currentPage = getCurrentPage();
    setSelectedMenuItem(currentPage);
  }, [])

  return (
    <>
      <div className="navbar bg-base-100 shadow-xl z-[1500] sticky top-0 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* Dropdown menu */}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu?.map((item, index) => {
                if (item.active === '0') {
                  return (
                    <div key={index}></div>
                  );
                }
                return (
                  <NavMenuItem
                    key={index}
                    index={index}
                    title={item.titleDe}
                    link={item.link}
                    selected={selectedMenuItem === item.link}
                    handleMenuItemClick={handleMenuItemClick}
                  />
                );
              })}
            </ul>
          </div>
          <div className="flex-1 whitespace-nowrap">
            {/* Logo/Title */}
            <Link
              href="/"
              className="btn btn-ghost normal-case text-xl"
              onClick={() => setSelectedMenuItem("")}
              // onClick={() => handleClick(-1)}
            >
              {settings?.homepageTitle}
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex">
          {/* Horisontal menu */}
          <ul className="menu menu-horizontal px-1">
            {menu?.map((item, index) => {
              if (item.active === '0') {
                return null;
              }
              return (
                <NavMenuItem
                  key={index}
                  index={index}
                  title={item.titleDe}
                  link={item.link}
                  selected={selectedMenuItem === item.link}
                  handleMenuItemClick={handleMenuItemClick}
                />
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <div
            className={`md:tooltip md:tooltip-sm mx-0 ${
              isTooltipOpen ? `md:tooltip-open` : ""
            } md:tooltip-left`}
            data-tip={settings?.emailTooltipTextDe}
          >
            <a
              href={`mailto:${settings?.email}`}
              className="btn btn-secondary text-white"
            >
              @
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
