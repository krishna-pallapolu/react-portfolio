import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";

const HomeAccordion = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const accordions = [
		{
			title: <h5>Sapaad Software Pvt Ltd</h5>,
			content: (
				<div>
					<img src="path_to_image_1" alt="Image for Accordion 1" />
					<p>Content for Accordion 1</p>
				</div>
			),
		},
		{
			title: <h5>Google Operations Center</h5>,
			content: (
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			),
		},
		{
			title: <h5>Onetrust Privacy Management</h5>,
			content: "Content for Accordion 3",
		},
		{
			title: <h5>Cognizant Technology Solutions</h5>,
			content: "Content for Accordion 4",
		},
	];

	return (
		<div className="accordion-container">
			{accordions.map((accordion, index) => (
				<Accordion
					key={index}
					title={accordion.title}
					content={accordion.content}
					isOpen={index === activeIndex}
				/>
			))}
		</div>
	);
};

export default HomeAccordion;
