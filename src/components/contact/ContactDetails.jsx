import { motion } from 'framer-motion';

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-7/12 xl:w-6/12">
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.9,
					delay: 0.1,
				}}
				className="font-semibold text-4xl text-left sm:text-left text-ternary-dark dark:text-gray-300 uppercase"
			>
				Get in touch..
			</motion.h1>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.9,
					delay: 0.1,
				}}
				className="text-sm mt-4 lg:text-sm xl:text-md text-left sm:text-left text-ternary-dark dark:text-gray-500"
			>
				I am a Senior Backend Developer with a deep passion for Golang and over 6 years of experience building robust, scalable, and high-performing software solutions.
			</motion.p>

		</div>
	);
};

export default ContactDetails;
