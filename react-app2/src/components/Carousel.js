import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
	return (
		<Carousel>
			<Carousel.Item interval={2000}>
				<img className="d-block w-100" src="https://picsum.photos/200/300" alt="First slide" />
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img className="d-block w-100" height={400} src="https://source.unsplash.com/user/c_v_r/100x100" alt="Second slide" />
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="https://placehold.co/600x400/png" alt="Third slide" />
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default IndividualIntervalsExample;
