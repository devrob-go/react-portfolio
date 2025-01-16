import { FiArrowDownCircle } from 'react-icons/fi';
import { FiArrowRightCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import profileImage from '../../assets/images/profile.jpg';
import AppFooter from '../shared/Socials';

const Home = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col md:flex-row w-full min-h-screen justify-center items-center -mt-32"
		>
			<div className='w-full mt-60 sm:mt-48 lg:mt-0 xl:w-8/12 flex flex-wrap lg:flex-row xl:flex-row items-center justify-center'>
				<div className="w-full lg:w-1/3 xl:w-1/3 text-center flex justify-center">
					<img src={profileImage} className="rounded-full border-4 border-gray-400 dark:border-gray-200 w-56 h-56 sm:w-64 sm:h-64" alt="" />
				</div>
				<div className="w-full lg:w-2/3 xl:w-2/3 lg:pl-4 text-center lg:text-left xl:text-left">
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.1,
						}}
						className="text-xsm lg:text-sm xl:text-md tracking-widest mt-8 lg:mt-0 text-ternary-dark dark:text-gray-400"
					>
						Hello, I'am
					</motion.p>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.1,
						}}
						className="font-general-semibold mt-2 text-3xl sm:text-4xl text-ternary-dark dark:text-gray-300 uppercase"
					>
						M. Rahaman Robin
					</motion.h1>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.2,
						}}
						className="font-thin mt-3 text-2xl sm:text-3xl leading-normal tracking-widest text-gray-500 dark:text-gray-400"
					>
						<motion.div className='flip'>
							<div className='leading-none'><div>Coffee Lover</div></div>
							<div className='leading-normal'><div>Abstract Thinker</div></div>
							<div className='leading-normal'><div>Programmer</div></div>
							<div className='leading-none'><div>Coffee Lover</div></div>
							<div className='leading-normal'><div>Abstract Thinker</div></div>
							<div className='leading-normal'><div>Programmer</div></div>
							<div className='leading-none'><div>Coffee Lover</div></div>
							<div className='leading-normal'><div>Abstract Thinker</div></div>
							<div className='leading-normal'><div>Programmer</div></div>
							<div className='leading-none'><div>Coffee Lover</div></div>
							<div className='leading-normal'><div>Abstract Thinker</div></div>
							<div className='leading-normal'><div>Programmer</div></div>
							<div className='leading-none'><div>Coffee Lover</div></div>
							<div className='leading-normal'><div>Abstract Thinker</div></div>
							<div className='leading-normal'><div>Programmer</div></div>
							<div className='leading-none'><div>Coffee Lover</div></div>
							<div className='leading-normal'><div>Abstract Thinker</div></div>
							<div className='leading-normal'><div>Programmer</div></div>
						</motion.div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							ease: 'easeInOut',
							duration: 0.9,
							delay: 0.3,
						}}
						className="flex justify-center lg:justify-start"
					>
						<a
							download="M_Rahaman_Robin_Resume.pdf"
							href="/files/M_Rahaman_Robin_Resume.pdf"
							className="font-general-medium flex justify-left items-left mt-3 sm:mt-6 mb-6 sm:mb-0 text-lg text-gray-500 dark:hover:text-gray-400 hover:text-gray-900"
							aria-label="Download Resume"
						>
							<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
							<span className="text-xs sm:text-sm font-extralight tracking-widest duration-100 leading-normal">
								Download Resume
							</span>
						</a>
						<a
							href="/contact"
							className="font-general-medium flex justify-left items-left mt-3 sm:mt-6 mb-6 sm:mb-0 text-lg ml-8 text-gray-500 dark:hover:text-gray-400 hover:text-gray-900"
						>
							<FiArrowRightCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowRightCircle>
							<span className="text-xs sm:text-sm font-extralight tracking-widest duration-100 leading-normal">
								Contact Me
							</span>
						</a>
					</motion.div>
					<div className='flex justify-center lg:block'>
						<AppFooter />
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Home;
