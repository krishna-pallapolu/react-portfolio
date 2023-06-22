import React, { useState, useEffect } from "react";
import Accordion from "../components/Accordion";
import HomeAccordion from "../components/HomeAccordion";

const Home = () => {
	return (
		<div className="container-fluid px-0">
			<section className="hero">
				<div className="hero-content">
					<h1 className="text-white">Welcome to Our Website</h1>
					<p className="text-white">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</section>
			<section className="py-5">
				<h2>Work Experiences</h2>
				<HomeAccordion />
			</section>
		</div>
	);
};

export default Home;
