import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Switcher from '../reusable/Switcher';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);

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
			id="nav"
			className="sm:container sm:mx-auto top-0 w-full"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/experiences"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-gray-400  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Experiences"
					>
						Experiences
					</Link>
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-gray-400  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-gray-400  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>
				<div className="sm:flex sm:justify-between sm:items-center ">
					{/* Header links large screen */}
					<div className="font-general-medium hidden m-0 sm:ml-4 mt-2 sm:mt-1 sm:flex p-5 sm:p-0 justify-right items-right shadow-lg sm:shadow-none">
						<Link
							to="/"
							className="block text-left text-sm text-gray-400 text-space tracking-widest dark:text-gray-500 hover:text-secondary-dark dark:hover:text-gray-400  sm:mx-4 mb-2 sm:py-2"
							aria-label="Home"
						>
							Home
						</Link>
						<Link
							to="/experiences"
							className="block text-left text-sm text-gray-400 text-space tracking-widest dark:text-gray-500 hover:text-secondary-dark dark:hover:text-gray-400  sm:mx-4 mb-2 sm:py-2"
							aria-label="Experiences"
						>
							Experiences
						</Link>
						<Link
							to="/projects"
							className="block text-left text-sm text-gray-400 text-space tracking-widest dark:text-gray-500 hover:text-secondary-dark dark:hover:text-gray-400  sm:mx-4 mb-2 sm:py-2"
							aria-label="Projects"
						>
							Projects
						</Link>
						<Link
							to="/contact"
							className="block text-left text-sm text-gray-400 text-space tracking-widest dark:text-gray-500 hover:text-secondary-dark dark:hover:text-gray-400  sm:mx-4 mb-2 sm:py-2"
							aria-label="Contact"
						>
							Contact
						</Link>
					</div>

					<Switcher></Switcher>
				</div>
			</div>
		</motion.nav>
	);
};

export default AppHeader;
