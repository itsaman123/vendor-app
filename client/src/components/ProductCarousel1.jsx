import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel1 = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,

		appendDots: dots => (
			<div>
				<ul style={{ margin: '0px', padding: '0px' }}>{dots}</ul>
			</div>
		),

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};

	return (
		<div className="w-full max-w-screen-lg mx-auto p-4">
			<h1 className="text-5xl  m-5 text-center font-serif bg-gray-300 border-1 rounded-3">Explore the Variety of Fresh Products</h1>
			<Slider {...settings}>
				<div className="w-full">
					<img
						src="https://img.freepik.com/free-vector/coffee-advertisement-realistic-composition_1284-25843.jpg?ga=GA1.1.1157047494.1720549083&semt=ais_hybrid"
						alt="Slide 1"
						className="w-full h-auto object-cover"
					/>
				</div>
				<div className="w-full">
					<img
						src="https://images.unsplash.com/photo-1677769237703-629d082d89bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwcG93ZGVyfGVufDB8fDB8fHww"
						alt="Slide 2"
						className="w-full h-auto object-cover"
					/>
				</div>
				<div className="w-full">
					<img
						src="https://images.unsplash.com/photo-1707425197455-bd0639a0efd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2hlZXxlbnwwfHwwfHx8MA%3D%3D"
						alt="Slide 3"
						className="w-full h-auto object-cover"
					/>
				</div>
			</Slider>
 		</div>
	);
};

export default ProductCarousel1;
