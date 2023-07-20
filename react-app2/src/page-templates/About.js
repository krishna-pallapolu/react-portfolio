import React from "react";
import ContactTabs from "../components/Tabs";

const About = () => {
	return (
		<div className="container py-5">
			<h2>About Page</h2>
			<p>This is the About page content.</p>
			<section>
				<ContactTabs />
			</section>
		</div>
	);
};

export default About;
