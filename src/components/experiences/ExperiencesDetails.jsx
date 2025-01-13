import { useContext } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';
import { FiArrowRightCircle } from 'react-icons/fi';
import AppFooter from '../shared/Socials';
import ExperiencesContext from '../../context/ExperiencesContext';


const Experiences = () => {
	const { experiences } = useContext(ExperiencesContext);
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col xl:flex-row justify-between items-top w-full"
		>
			<div className="w-full xl:w-4/12 text-center xl:h-screen top-0 xl:pl-0 pl-4 pt-60 -mt-32 xl:sticky">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold mt-2 text-xl lg:text-2xl xl:text-3xl text-left sm:text-left text-ternary-dark dark:text-gray-300 uppercase"
				>
					M Rahaman Robin
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-2 text-md md:text-lg lg:text-xl xl:text-xl text-left sm:text-left leading-normal text-gray-500 dark:text-gray-400"
				>
					Backend Developer
				</motion.p>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="text-sm mt-4 lg:text-sm xl:text-md text-left sm:text-left text-ternary-dark dark:text-gray-400"
				>
					I am a Senior Backend Developer with a deep passion for Golang and over 6 years of experience building robust, scalable, and high-performing software solutions.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-left"
				>
					<a
						download="M_Rahaman_Robin_Resume.pdf"
						href="/files/M_Rahaman_Robin_Resume.pdf"
						className="font-general-medium flex justify-left items-left mt-6 mb-6 sm:mb-0 text-lg"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5  text-gray-400 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-md text-gray-500 duration-100">
							Download Resume
						</span>
					</a>
					<a
						href="/contact"
						className="font-general-medium flex justify-left items-left mt-6 mb-6 sm:mb-0 text-lg ml-8"
					>
						<FiArrowRightCircle className="mr-2 sm:mr-3 h-5 w-5 text-gray-400 sn:w-6 sm:h-6 duration-100"></FiArrowRightCircle>
						<span className="text-sm sm:text-md text-gray-500 duration-100">
							Contact Me
						</span>
					</a>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="xl:absolute xl:bottom-20 inset-x-0"
				>
					<AppFooter />
				</motion.div>
			</div>
			<div className='w-full xl:w-8/12 xl:pl-20 pt-20 xl:pt-32 text-jutify pb-20'>
				{experiences.map((exp) => (
					<div class="xl:flex flex-col items-top p-4 rounded-lg md:flex-row md:w-full dark:hover:bg-slate-900/30 hover:bg-slate-100/30">
						<div className='w-full xl:w-3/12 text-sm text-ternary-dark dark:text-primary-light opacity-50 xl:text-right mb-3 pr-8 pt-1'>
							{exp.year}
						</div>
						<div class="w-full xl:w-9/12 leading-normal pr-4 pb-3 text-justify">
							<h5 class="mb-2 text-lg tracking-tight text-gray-900 dark:text-white">{exp.title}</h5>
							{exp.exps.map((details) => (
								<p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{details}</p>
							))}

							<p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Highlighted Projects:</span> {exp.projects}</p>
							<div className='flex flex-wrap'>
								{exp.tech.map((tech) => (
									<span class="mr-2 mb-2 rounded-full dark:bg-teal-400/10 bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400 dark:text-teal-300 ">
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default Experiences;
