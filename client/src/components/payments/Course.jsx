//Course.js

const Course = () => {
	return (
		<div className="flex justify-center">
			<div className="card w-96 bg-gray-200 shadow-xl">
				<figure class="px-10 pt-10">
					<img
						src="https://media.geeksforgeeks.org/
							wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
						alt="GeeksForGeeks Course"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						Full Stack Development with React & Node JS - Live
					</h2>
					<p>
						Looking to become a full-stack developer? This live, online course
						with a focus on the popular JS library React for front-end and
						Node.js for back-end along with APIs and deployment is a must-have
						program for any aspiring developer.
					</p>
					<p>
						<b>Course Price: $40.00</b>
					</p>
					<div className="card-actions justify-center">
						<a
							className="btn btn-primary rounded-lg text-white mt-5"
							href="/payment"
						>
							Purchase
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;
