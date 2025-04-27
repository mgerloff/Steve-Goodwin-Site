import HeroBanner from "./HeroBanner";
import AreasOfPractice from "./AreasOfPractice";
import Contact from "./Contact";
import Experience from "./Experience";
import Review from "./Review";

export default function Home() {
    return (
        <>
            <HeroBanner />
            <AreasOfPractice />
            <Experience />
            <Review />
            <div id="contact-section">
            <Contact />
            </div>
        </>
    );
}
