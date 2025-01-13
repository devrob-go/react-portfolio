import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppHeader from './components/shared/Header';
import './assets/css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const Experiences = lazy(() => import('./pages/Experiences'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));


function App() {
	return (
		<AnimatePresence>
			<div className="bg-secondary-light dark:bg-primary-dark transition duration-300 min-h-screen">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="experiences" element={<Experiences />} />
							<Route path="projects" element={<Projects />} />
							<Route
								path="projects/single-project"
								element={<ProjectSingle />}
							/>

							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
