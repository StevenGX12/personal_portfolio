export default function HeroSection() {
	return (
		<section id="heroSection" className="hero--section">
			<div className="hero--section--content--box">
				<div className="hero--section--content">
					<h1 className="hero--section--title">
						<span className="hero--section--title--color">Hi, My name is Guan Xiao</span>{" "}
						<br />
						Welcome to My Page
					</h1>
					<p className="hero--section--title--description">
						Computer engineering student at the National University of Singapore.
						<br /> Passionate about robotics, AI and machine learning, as well as full stack development.
					</p>
				</div>
			</div>
			<div className="hero--section--img">
				<img src="./img/hero.png" alt="Hero Section" />
			</div>
		</section>
	)
}
