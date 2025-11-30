import React from "react";
import "./Main.css";
import restauranfood from "./assets/icons_assets/restauranfood.jpg";
import greekSaladImg from "./assets/icons_assets/greek salad.jpg";
import bruschettaImg from "./assets/icons_assets/bruchetta.svg";
import lemonDessertImg from "./assets/icons_assets/lemon dessert.jpg";
import pastaImg from "./assets/icons_assets/pasta image.png";
import restaurant from "./assets/icons_assets/restaurant.jpg";
const MainApp = () => {
  return (
    <>
      {" "}
      <main>
        <section class="hero-section">
          <div class="hero-text">
            <h1 class="title">Little Lemon</h1>
            <h3 class="sub-title">Chicago</h3>

            <span class="desc">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </span>

            <button class="reserve-btn">Reserve a Table</button>
          </div>

          <div class="hero-image-wrapper">
            <img src={restauranfood} class="hero-image" />
          </div>
        </section>

        <section className="specials-section">
          <div className="specials-header">
            <h2 className="specials-title">This weeks specials!</h2>
            <button className="specials-btn">Online Menu</button>
          </div>

          <div className="specials-cards">
            {/* Card 1 */}
            <article className="special-card">
              <img
                src={greekSaladImg} // replace with your import/path
                alt="Greek salad"
                className="special-card-image"
              />
              <div className="special-card-body">
                <div className="special-card-title-row">
                  <h3>Greek salad</h3>
                  <span className="price">$ 12.99</span>
                </div>
                <p className="special-card-desc">
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <p className="special-card-footer">Order a delivery 🚚</p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="special-card">
              <img
                src={bruschettaImg}
                alt="Bruschetta"
                className="special-card-image"
              />
              <div className="special-card-body">
                <div className="special-card-title-row">
                  <h3>Bruschetta</h3>
                  <span className="price">$ 5.99</span>
                </div>
                <p className="special-card-desc">
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
                <p className="special-card-footer">Order a delivery 🚚</p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="special-card">
              <img
                src={lemonDessertImg}
                alt="Lemon dessert"
                className="special-card-image"
              />
              <div className="special-card-body">
                <div className="special-card-title-row">
                  <h3>Lemon Dessert</h3>
                  <span className="price">$ 5.00</span>
                </div>
                <p className="special-card-desc">
                  This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <p className="special-card-footer">Order a delivery 🚚</p>
              </div>
            </article>
            <article className="special-card">
              <img
                src={pastaImg}
                alt="Pasta Primavera"
                className="special-card-image"
              />
              <div className="special-card-body">
                <div className="special-card-title-row">
                  <h3>Pasta Primavera</h3>
                  <span className="price">$ 8.50</span>
                </div>
                <p className="special-card-desc">
                  Fresh pasta tossed with seasonal vegetables, garlic, herbs,
                  and a light olive oil sauce for a bright, comforting
                  Mediterranean flavor.
                </p>
                <p className="special-card-footer">Order a delivery 🚚</p>
              </div>
            </article>
          </div>
        </section>

        <section className="testimonials-section">
          <h2 className="testimonials-title">What Our Customers Say</h2>

          <div className="testimonials-container">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80"
                className="testimonial-img"
                alt="customer"
              />
              <h3 className="testimonial-name">Emily Carter</h3>
              <p className="testimonial-text">
                “Little Lemon never disappoints! Fresh ingredients, amazing
                flavors, and the friendliest staff. The Greek salad and lemon
                dessert are my favorites!”
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80"
                className="testimonial-img"
                alt="customer"
              />
              x<h3 className="testimonial-name">Daniel Hughes</h3>
              <p className="testimonial-text">
                “I love the authentic Mediterranean taste. The bruschetta is
                light, flavorful, and always perfectly seasoned. Highly
                recommended!”
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80"
                className="testimonial-img"
                alt="customer"
              />
              <h3 className="testimonial-name">Sophia Martinez</h3>
              <p className="testimonial-text">
                “A wonderful dining experience with beautiful ambiance. Every
                dish feels homemade and crafted with love. Absolutely
                delicious!”
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            {/* Left Text */}
            <div className="about-text">
              <h2 className="about-title">About Little Lemon</h2>
              <h3 className="about-location">Chicago</h3>

              <p className="about-description">
                Little Lemon is a family-owned Mediterranean restaurant, known
                for combining traditional recipes with a modern twist. Our
                mission is simple — to serve fresh, flavorful, and authentic
                dishes crafted with love and the finest ingredients.
              </p>

              <p className="about-description">
                From Greek salads to lemon desserts, every plate tells a story
                inspired by our heritage. Whether you're here for a quick lunch
                or a cozy dinner, we promise a warm, welcoming dining
                experience!
              </p>
            </div>

            {/* Right Image */}
            <div className="about-image-wrapper">
              <img
                src={restaurant}
                alt="Little Lemon Restaurant"
                className="about-image"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default MainApp;
