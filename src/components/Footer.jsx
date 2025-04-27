import { Link } from "react-router-dom"; // If you're using react-router for navigation

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__row">
                <p>© 2025 Steve Goodwin | <Link to="/privacy" className="footer__link">Privacy Policy</Link></p>
            </div>
            <div className="footer__row footer__disclaimer">
                <p>
                    The information you obtain at this site is not, nor is it intended to be, legal advice. You should consult an attorney for advice regarding your individual situation. We invite you to contact us and welcome your calls, letters and electronic mail. Contacting us does not create an attorney-client relationship. Please do not send any confidential information to us until such time as an attorney-client relationship has been established.
                </p>
            </div>
        </footer>
    );
}
