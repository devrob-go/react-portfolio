import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto"
		>
			<div className='items-top w-full mt-20 lg:mt-48 xl:mt-48 pb-32'>
				<ContactDetails />
				<ContactForm />
			</div>
		</motion.div>
	);
};

export default Contact;
