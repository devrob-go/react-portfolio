import { useState, createContext } from 'react';
import { experiencesData } from '../data/experiencesData';

const ExperiencesContext = createContext();

export const ExperiencesProvider = ({ children }) => {
	const [experiences, setExperiences] = useState(experiencesData);

	return (
		<ExperiencesContext.Provider
			value={{
				experiences,
				setExperiences,
			}}
		>
			{children}
		</ExperiencesContext.Provider>
	);
};

export default ExperiencesContext;
