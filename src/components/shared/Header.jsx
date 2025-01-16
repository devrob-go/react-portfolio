import { useState } from 'react';
import { motion } from 'framer-motion';
import Switcher from '../reusable/Switcher';
import { NavLink, useLocation } from "react-router-dom";

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const location = useLocation(); // Get current location

	// Navigation links array for simplicity
	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "Experiences", path: "/experiences" },
		{ name: "Projects", path: "/projects" },
		{ name: "Contact", path: "/contact" },
		{ name: "Blogs", path: "/blogs" },
	];

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav-top"
			className="sm:container sm:mx-auto top-0 w-full"
		>
			<div className="z-10 transition-all duration-300 ease-in-out absolute sm:relative w-full top-0 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className={`overflow-hidden ${showMenu ? "navigation" : ""}`}>
					<div id="burgerBtn" className='sm:hidden' onClick={toggleMenu}>
						<div className="line"></div>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={`fixed top-0 left-0 h-full w-60 sm:w-80 pl-16 pt-28 dark:bg-slate-900 bg-primary-light transform transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
						}`}
				>
					{navLinks.map((link) => (
						<NavLink
							key={link.path}
							to={link.path}
							onClick={toggleMenu}
							className={`block text-left text-2xl font-extralight hover:text-secondary-dark dark:hover:text-ternary-light sm:mx-4 mb-3 sm:py-2 pt-3 sm:pt-2
									${location.pathname === link.path ? "text-primary-dark dark:text-ternary-light" : "dark:text-gray-400 text-gray-400"}`}
							aria-label={link.name}
						>
							{link.name}
						</NavLink>
					))}
				</div>
				<div className="sm:flex sm:justify-between sm:items-center absolute lg:relative xl:relative top-[30px] lg:top-0 right-0">
					{/* Header links large screen */}
					<div className="font-normal hidden m-0 sm:ml-4 mt-2 sm:mt-1 sm:flex p-5 sm:p-0 justify-right items-right shadow-lg sm:shadow-none">
						{navLinks.map((link) => (
							<NavLink
							key={link.path}
							to={link.path}
							className={`block text-left text-sm text-gray-400 text-space tracking-widest hover:text-secondary-dark dark:hover:text-gray-400 sm:mx-4 mb-2 sm:py-2
								${location.pathname === link.path ? "text-secondary-dark dark:text-gray-400" : "dark:text-gray-500"}`}
								aria-label={link.name}
								>
								{link.name}
							</NavLink>
						))}
					</div>
					<Switcher></Switcher>
				</div>
			</div>
		</motion.nav>
	);
};

export default AppHeader;
