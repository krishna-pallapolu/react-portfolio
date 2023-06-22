import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./page-templates/Home";
import About from "./page-templates/About";
import Contact from "./page-templates/Contact";
import Services from "./page-templates/Services";

const App = () => {
	return (
		<Router>
			<div className="main">
				<NavMenu />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/services" element={<Services />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
