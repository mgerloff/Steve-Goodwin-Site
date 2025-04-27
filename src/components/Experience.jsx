import { useState } from "react";
import Chart from "../assets/avvo-practice-chart.png";

const associationsList = [
    "American Bar Association",
    "Federal Bar Association",
    "National Association of Criminal Defense Attorneys",
    "Richmond Criminal Bar Association",
    "Virginia Association of Defense Attorneys",
    "Virginia Bar Association",
    "Vermont Trial Lawyers Association",
];

export default function Experience() {
    const [showAllAssociations, setShowAllAssociations] = useState(false);

    const toggleAssociations = () => {
        setShowAllAssociations((prev) => !prev);
    };

    return (
        <section className="experience">
            <h2 className="experience__title">Experience</h2>
            <div className="experience__grid-container">
                <div className="experience__grid">
                    {/* Chart Section */}
                    <div className="experience__item chart full-width">
                        <img src={Chart} alt="AVVO Rating Chart" className="experience__chart" />
                    </div>

                    {/* Honors + Avvo Section */}
                    <div className="experience__item">
                        <div className="honors-avvo-section">
                            {/* Honors */}
                            <div className="honors">
                                <h3>Honors</h3>
                                <p>2000</p>
                                <p>Legal Elite, Virginia Business Magazine</p>
                            </div>
                            {/* Avvo Rating */}
                            <div className="avvo-rating-section">
                                <div className="avvo-rating">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="12" viewBox="0 0 45 12" fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M35.7476 3.16127C33.4134 3.16127 31.3125 5.05225 31.2791 7.34746C31.2457 9.65853 33.0965 11.5495 35.5308 11.5495C37.865 11.5495 39.966 9.65853 39.9994 7.36331C40.0328 5.05225 38.2657 3.16127 35.7476 3.16127ZM23.8929 11.5818C27.7779 11.5818 30.7455 6.92735 30.9458 3.19352H28.0779C27.761 5.60197 26.9606 7.29875 25.8773 8.18762H25.7771L25.3934 3.19352H22.5759L23.3258 11.1611C23.3592 11.4844 23.6263 11.5818 23.8929 11.5818ZM14.5729 11.5818C18.4573 11.5818 21.4254 6.92735 21.6258 3.19352H18.7579C18.4409 5.60197 17.6406 7.29875 16.5567 8.18762H16.4565L16.0734 3.19352H13.2558L14.0058 11.1611C14.0392 11.4844 14.3058 11.5818 14.5729 11.5818ZM8.27028 3.90459L8.36991 3.93743L8.6365 7.31514H5.35202C6.33572 5.86068 7.38621 4.63154 8.27028 3.90459ZM35.6314 9.15748C34.6975 9.15748 33.9142 8.44638 33.9306 7.41201C33.9475 6.29667 34.7145 5.60199 35.6648 5.60199C36.5981 5.60199 37.382 6.31253 37.3656 7.34747C37.3486 8.46224 36.5817 9.15748 35.6314 9.15748ZM8.9535 11.533H12.088L11.1213 0.833744C11.0879 0.494613 10.5541 0.381381 10.1874 0.429505C6.35274 0.914704 1.61761 7.05642 0 11.533H3.08468C3.35127 10.8542 3.66822 10.1918 4.0016 9.54526H8.80351L8.9535 11.533Z"
                                            fill="#00447B"
                                        />
                                    </svg>
                                    <p>Rating: <span>7.5 (Very Good)</span></p>
                                    <i className="icon-info-circle-after-blue avvo-rating-modal-trigger"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Associations Section */}
                    <div className="experience__item">
                        <h3>Associations</h3>
                        <ul className="associations__list">
                            {associationsList.slice(0, showAllAssociations ? associationsList.length : 5).map((association, index) => (
                                <li key={index}>{association}</li>
                            ))}
                        </ul>
                        <button onClick={toggleAssociations} className="see-all-button">
                            {showAllAssociations ? "See Less Associations" : "See All Associations"}
                        </button>
                    </div>

                    {/* Education Section */}
                    <div className="experience__item education">
                        <h3>Education</h3>
                        <ul className="education__list">
                            <li>
                                <strong>1991</strong><br />
                                University of Richmond, The T. C. Williams School of Law<br />
                                JD - Juris Doctor
                            </li>
                            <li>
                                <strong>1988</strong><br />
                                University of Virginia<br />
                                BA - Bachelor of Arts
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
