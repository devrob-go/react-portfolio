import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiGlobe,
	FiYoutube,
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const socialLinks = [
	{
		id: 1,
		icon: <FiGlobe />,
		url: 'https://www.dev-rob.com/',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/devrob-go',
	},
	{
		id: 3,
		icon: <FiTwitter />,
		url: 'https://twitter.com/',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/devrob/',
	},
	{
		id: 5,
		icon: <FiYoutube />,
		url: 'https://www.youtube.com',
	},
];

const AppFooter = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="mt-6"
		>
			<div className="font-general-regular flex flex-col items-left justify-left">
				<div className="w-full md:w-1/3">
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<motion.a
								href={link.url}
								target="__blank"
								key={link.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									ease: 'easeInOut',
									duration: 0.9,
									delay: 0.1,
								}}
								className="text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark/40 hover:bg-gray-100 shadow-sm p-2 duration-300"
							>
								
								<motion.i
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										ease: 'easeInOut',
										duration: 0.9,
										delay: 0.1,
									}}
									className="text-xl"
								>
									{link.icon}
								</motion.i>
							</motion.a>
						))}
					</ul>
				</div>
			</div>
		</motion.section>
	);
};

export default AppFooter;
