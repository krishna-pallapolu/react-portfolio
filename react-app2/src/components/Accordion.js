import React, { useState, useEffect } from "react";

const Accordion = ({ title, content, isOpen }) => {
	const [isOpenState, setIsOpenState] = useState(isOpen);

	useEffect(() => {
		setIsOpenState(isOpen);
	}, [isOpen]);

	const toggleAccordion = () => {
		setIsOpenState(!isOpenState);
	};

	return (
		<div className={`accordion ${isOpenState ? "active" : ""}`}>
			<div className="accordion-header py-2" onClick={toggleAccordion}>
				{title}
			</div>
			{isOpenState && (
				<div className="accordion-content py-2">{content}</div>
			)}
		</div>
	);
};

export default Accordion;
