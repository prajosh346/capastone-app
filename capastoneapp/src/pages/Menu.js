import React from "react";
import './Menu.css';
import saladImg from '../assets/icons_assets/greek salad.jpg';
import bruchettaImg from '../assets/icons_assets/bruchetta.svg';
import pastaImg from '../assets/icons_assets/pasta image.png';
import dessertImg from '../assets/icons_assets/lemon dessert.jpg';
import grilledFishImg from '../assets/icons_assets/grilled-fish.svg';

const menuData = [
  {
    id: 'starters',
    title: 'Starters',
    items: [
      { id: 1, name: 'Greek Salad', price: '$12', desc: 'Fresh tomatoes, cucumbers, olives, feta cheese and a lemon-oregano dressing.', img: saladImg },
      { id: 2, name: 'Bruchetta', price: '$8', desc: 'Toasted sourdough with tomato, basil, garlic and extra-virgin olive oil.', img: bruchettaImg },
    ],
  },
  {
    id: 'mains',
    title: 'Mains',
    items: [
      { id: 3, name: 'Pasta Special', price: '$18', desc: 'House-made pasta with a light tomato and herb sauce.', img: pastaImg },
      { id: 4, name: 'Grilled Fish', price: '$22', desc: 'Fresh catch grilled with lemon-herb butter and seasonal sides.', img: grilledFishImg },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { id: 5, name: 'Lemon Dessert', price: '$7', desc: 'Light lemon custard topped with a crisp crumble.', img: dessertImg },
    ],
  },
];

const MenuApp = () => {
  return (
    <main className="menu-page">
      <div className="breadcrumb container">
        <a href="/">Home</a> &gt; <span>Menu</span>
      </div>
      <header className="menu-header container">
        <h1>Our Menu</h1>
        <p>Seasonal Mediterranean dishes prepared with fresh, local ingredients.</p>
        <a href="/" className="btn back-home">Back to Home</a>
      </header>

      <section className="menu-list container">
        {menuData.map((section) => (
          <div key={section.id} className="menu-section">
            <h2 className="section-title">{section.title}</h2>
            <div className="menu-grid">
              {section.items.map((item) => (
                <article key={item.id} className="menu-card" aria-labelledby={`item-${item.id}`}>
                  {item.img && (
                    <div className="menu-image">
                      <img src={item.img} alt={item.name} />
                    </div>
                  )}
                  <div className="menu-info">
                    <div className="menu-row">
                      <h3 id={`item-${item.id}`} className="menu-name">{item.name}</h3>
                      <span className="menu-price">{item.price}</span>
                    </div>
                    <p className="menu-desc">{item.desc}</p>
                    <div className="menu-actions">
                      <a href="/order" className="btn">Order</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="menu-cta container">
        <a href="/reservation" className="btn btn-outline">Reserve a Table</a>
      </div>
    </main>
  );
};

export default MenuApp;