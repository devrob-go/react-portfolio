import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppHeader from './components/shared/Header';
import './assets/css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import CursorEffect from './hooks/cursorMovingEffect.jsx';

const Experiences = lazy(() => import('./pages/Experiences'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Blogs = lazy(() => import('./pages/Blogs.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));


function App() {
	return (
		<AnimatePresence>
			<div className="bg-secondary-light dark:bg-slate-900 transition duration-300 min-h-screen">
				<CursorEffect />
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
							<Route path="blogs" element={<Blogs />} />
						</Routes>
					</Suspense>
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
