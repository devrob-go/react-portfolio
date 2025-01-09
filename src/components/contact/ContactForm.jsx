import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

const ContactForm = () => {
	return (
		<div className="w-full pt-16">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="flex flex-wrap text-2xl lg:text-4xl xl:text-3xl dark:text-gray-400 font-extralight pr-4 align-bottom"
				>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>My</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>name</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>is</span>
					<FormInput
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>and</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>i</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>have</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>a</span>
					<FormInput
						labelFor="text"
						inputType="text"
						inputId="text"
						inputName="text"
						placeholderText="Website, Job, Task Etc"
						ariaLabelName="Text"
					/>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>that</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>needs</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>help.</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>You</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>can</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>reach</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>me</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>at</span>
					<FormInput
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>to</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>discuss</span>
					<span className='px-1 mb-2 lg:mb-5 xl:mb-6'>further.</span>
					<div className="mt-10 w-full">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
							className="right uppercase px-4 py-2.5 w-60 self-end font-light text-gray-600 dark:hover:text-gray-200 dark:text-gray-600 text-center hover:text-gray-200 text-xl bg-transparent border border-gray-700 hover:bg-sky-900 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
