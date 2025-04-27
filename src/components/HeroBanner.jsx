import heroImage from "../assets/heroBanner.png";

export default function HeroBanner() {
    return (
        <div className="hero-banner">
            <div className="hero-banner__content">
                <div className="hero-banner__text">
                    <p className="hero-banner__title">Steve D. Goodwin</p>
                    <h2 className="hero-banner__subtitle">Because bad things happen to good people</h2>
                    <p className="hero-banner__title hero-banner__title--secondary">Attorney at Law</p>
                    <a href="#contact-section" className="hero-banner__contact-btn">Contact</a>
                </div>
                <div className="hero-banner__image">
                    <img src={heroImage} alt="Attorney Steve D. Goodwin" />
                </div>
            </div>
        </div>
    );
}
