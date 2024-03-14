import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";

export default function Homescreen() {
	return (
		<>
			<HeroSection />
			<AboutMe />
			<MySkills />
			<MyPortfolio />
			<ContactMe />
		</>
	);
}