import criminalIcon from '../assets/icons/criminal-defense-icon.png';
import trafficIcon from '../assets/icons/traffic-icon.png';
import duiIcon from '../assets/icons/dui-icon.png';
import civilIcon from '../assets/icons/civil-icon.png';
import familyIcon from '../assets/icons/family-law-icon.png';
import personalIcon from '../assets/icons/personal-injury-icon.png';
import corporateIcon from '../assets/icons/corporate-representation-icon.png';
import zoningIcon from '../assets/icons/zoning-icon.png';
import abcIcon from '../assets/icons/abc-store-icon.png';
import realEstateIcon from '../assets/icons/commercial-real-estate.png';
import restaurantIcon from '../assets/icons/restaurant-law-icon.png';


const practiceAreas = [
    { label: "Criminal Defense (State & Federal)", icon: criminalIcon },
    { label: "Traffic", icon: trafficIcon },
    { label: "DUI & Reckless Driving", icon: duiIcon },
    { label: "Civil Litigation", icon: civilIcon },
    { label: "Family Law", icon: familyIcon },
    { label: "Personal Injury", icon: personalIcon },
    { label: "General Corporate Representation", icon: corporateIcon },
    { label: "Zoning", icon: zoningIcon },
    { label: "Virginia ABC", icon: abcIcon },
    { label: "Commercial Real Estate", icon: realEstateIcon },
    { label: "Restaurant Law", icon: restaurantIcon },
];

export default function AreasOfPractice() {
    return (
        <div className="practice">
            <h2 className="practice__title">Areas of Practice</h2>
            <div className="practice__container">
            <div className="practice__grid">
                {practiceAreas.map((area, index) => (
                    <div className="practice__item" key={index}>
                        <p className="practice__name">{area.label}</p>
                        {area.icon && (
                            <img
                                src={area.icon}
                                alt={`${area.label} icon`}
                                className="practice__icon"
                            />
                        )}
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}
