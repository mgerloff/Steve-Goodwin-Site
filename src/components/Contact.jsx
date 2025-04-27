import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValue) {
            alert("Please complete the reCAPTCHA");
            return;
        }
        alert("Form submitted!");
    };

    return (
        <section className="contact">
            <h2 className="contact__title">Contact - Send a Message</h2>
            <form onSubmit={handleSubmit} className="contact__form">
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="contact__input"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="contact__input"
                />
                <textarea
                    placeholder="Message"
                    required
                    className="contact__input contact__textarea"
                ></textarea>
                <div className="contact__recaptcha">
                    <ReCAPTCHA
                        sitekey="6LcvyP0qAAAAAE-O37qlVpN47Te0DUahgDJPcD5H"
                        onChange={setCaptchaValue}
                    />
                </div>
                <button
                    type="submit"
                    className="contact__submit"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
