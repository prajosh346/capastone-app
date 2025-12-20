import React from "react";
import './About.css';
import restaurantImg from '../assets/icons_assets/restaurant.jpg';

const AboutApp = () => {
    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="hero-inner">
                    <h1>Little Lemon</h1>
                    <p className="tag">A joyful Mediterranean restaurant in the heart of the city</p>
                    <a href="/reservation" className="btn">Reserve a table</a>
                </div>
            </section>

            <section className="about-content container">
                <div className="about-grid">
                    <article className="about-card">
                        <h2>Our Story</h2>
                        <p>
                            Little Lemon started as a small family bistro with a love for fresh,
                            simple food and friendly hospitality. Over the years we've grown
                            while keeping the same warm, neighborhood spirit.
                        </p>
                    </article>

                    <article className="about-card">
                        <h2>Our Mission</h2>
                        <p>
                            We celebrate Mediterranean flavors, seasonal ingredients and
                            thoughtful cooking — bringing vibrant, healthy meals to every
                            table.
                        </p>
                    </article>

                    <article className="about-card">
                        <h2>Hours & Location</h2>
                        <p>
                            Open Tue–Sun, 11:00 AM – 10:00 PM<br />
                            123 Lemon Street, Cityville
                        </p>
                    </article>

                    <article className="about-card">
                        <h2>The Team</h2>
                        <p>
                            Our small team of chefs and hosts focuses on seasonal menus,
                            friendly service, and a welcoming atmosphere for friends and
                            families.
                        </p>
                    </article>
                </div>

                <div className="about-photo">
                    <img src={restaurantImg} alt="Little Lemon restaurant" />
                </div>

                <div className="about-more">
                    <h3>Visit Us</h3>
                    <p>
                        Drop by for a relaxed lunch or reserve for dinner. We source from
                        local farmers and change menus often — follow us for the latest
                        specials.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default AboutApp;