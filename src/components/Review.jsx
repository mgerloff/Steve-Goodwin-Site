import { useState } from "react";
import starIcon from "../assets/star-icon.png"; // You can replace this or use SVG

export default function Review() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <section className="review">
            <div className="review__container">
                <div className="review__box">
                    <div className="review__header">
                        <div className="review__stars">
                            {[...Array(5)].map((_, i) => (
                                <img key={i} src={starIcon} alt="star" className="review__star" />
                            ))}
                        </div>
                        <p className="review__meta">
                            Posted by Jeff | October 14, 2021 | Hired Attorney
                        </p>
                    </div>
                    <p className="review__text">
                        Well worth the time and money. Mr. Goodwin was very professional and honest from the start, and gave me many different suggestions regarding how my speeding ticket case might be most favorable in court. I was traveling from NC to KY and was pulled over in VA after my 18 month old daughter got sick in the car - I was simply trying
                        {!expanded && <>... </>}
                        {expanded && (
                            <>
                                {" "}
                                to get somewhere safe where we could take care of her. Mr. Goodwin was able to get my ticket dismissed, which completely exceeded my expectations. I would recommend Mr. Goodwin to anyone who might require his services.
                            </>
                        )}
                    </p>
                    <button onClick={toggleExpanded} className="review__toggle-btn">
                        {expanded ? "Collapse Review" : "See Full Review"}
                    </button>
                </div>
            </div>
        </section>
    );
}
