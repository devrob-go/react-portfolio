import React from 'react';

const FormInput = ({
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
}) => {
	return (
		<div className='lg:mb-2 xl:mb-3'>
			<input
				className="block w-48 lg:w-62 xl:w-72 font-normal px-0 focus:px-4 mb-1 focus:transition-all outline-none focus:duration-500 xl:mx-4 text-xl lg:text-2xl xl:text-2xl text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:placeholder:text-gray-600 focus:outline-none focus:ring-0 dark:text-gray-400 dark:border-gray-700 dark:focus:bg-slate-800"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
	);
};

export default FormInput;
