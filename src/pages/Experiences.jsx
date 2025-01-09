import { ExperiencesProvider } from '../context/ExperiencesContext';
import Experiences from '../components/experiences/ExperiencesDetails';

const Home = () => {
	return (
		<ExperiencesProvider>
		<div className="container mx-auto xl:min-h-screen">
			<Experiences></Experiences>
		</div>
		</ExperiencesProvider>
	);
};

export default Home;
