import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const NavMenu = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleMobileMenuToggle = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<button className="navbar-toggler" type="button" onClick={handleMobileMenuToggle}>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className={`collapse navbar-collapse${isMobileMenuOpen ? " show" : ""}`}>
				<div>
					<img width={120} className="primary" src="" alt="" />
				</div>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-link">
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-link">
							Contact
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/services" className="nav-link">
							Services
						</Link>
					</li>
				</ul>
				<div>
					<Button variant="primary">CTA </Button>
				</div>
			</div>
		</nav>
	);
};

export default NavMenu;
