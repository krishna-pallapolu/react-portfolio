import React from 'react';

const ExperienceSection = () => {
    const experienceData = [
	{
	    companyName: 'ABC Company',
	    location: 'City, Country',
	    duration: 'Jan 2010 - Dec 2019',
	    responsibilities: [
		'Developed and maintained web applications',
		'Collaborated with team members to meet project deadlines',
		'Implemented new features and enhancements',
		'Collaborated with team members to meet project deadlines',
		
	    ],
	},
	{
		companyName: 'ABC Company',
		location: 'City, Country',
		duration: 'Jan 2010 - Dec 2019',
		responsibilities: [
		  'Developed and maintained web applications',
		  'Collaborated with team members to meet project deadlines',
		  'Implemented new features and enhancements',
		  'Collaborated with team members to meet project deadlines',
		  'Collaborated with team members to meet project deadlines',
		  
		],
	  },
	  {
		companyName: 'ABC Company',
		location: 'City, Country',
		duration: 'Jan 2010 - Dec 2019',
		responsibilities: [
		  'Developed and maintained web applications',
		  'Collaborated with team members to meet project deadlines',
		  'Implemented new features and enhancements',
		  'Implemented new features and enhancements',
		  'Implemented new features and enhancements',
		  
		],
	  },
	// Add more experience items as needed
  ];

  const ExperienceItem = ({ companyName, location, duration, responsibilities }) => {
	return (
		<div className="col-sm-6 col-lg-4 experience-item d-flex py-2">
			<div className='card p-4 border-0 rounded-3 shadow'>
				<h3>{companyName}</h3>
				<p>{location}</p>
				<p>{duration}</p>
				<ul className="list-unstyled">
				  {responsibilities.map((responsibility, index) => (
				<li key={index}>{responsibility}</li>
				  ))}
				</ul>
			</div>
		</div>
	);
    };

    return (
	<section className="experience-section container">
	    <h2 className='py-4'>Experience</h2>
		<div className="row">
			{experienceData.map((item, index) => (
				<ExperienceItem
				  key={index}
				  companyName={item.companyName}
				  location={item.location}
				  duration={item.duration}
				  responsibilities={item.responsibilities}
				/>
			 ))}
	    </div>
	</section>
    );
};

export default ExperienceSection;
