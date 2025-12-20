import React, { useState } from "react";
import './OrderOnline.css';
import saladImg from '../assets/icons_assets/greek salad.jpg';
import bruchettaImg from '../assets/icons_assets/bruchetta.svg';
import pastaImg from '../assets/icons_assets/pasta image.png';
import dessertImg from '../assets/icons_assets/lemon dessert.jpg';
import grilledFishImg from '../assets/icons_assets/grilled-fish.svg';

const menuItems = [
  { id: 1, name: 'Greek Salad', price: 12, desc: 'Fresh tomatoes, cucumbers, olives, feta.', img: saladImg },
  { id: 2, name: 'Bruchetta', price: 8, desc: 'Toasted bread with tomato and basil.', img: bruchettaImg },
  { id: 3, name: 'Pasta Special', price: 18, desc: 'House-made pasta with seasonal sauce.', img: pastaImg },
  { id: 4, name: 'Grilled Fish', price: 22, desc: 'Fresh catch with lemon-herb butter.', img: grilledFishImg },
  { id: 5, name: 'Lemon Dessert', price: 7, desc: 'Light lemon custard with topping.', img: dessertImg },
];

const OrderOnlineApp = () => {
  const [cart, setCart] = useState({});
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[id] > 1) newCart[id]--;
      else delete newCart[id];
      return newCart;
    });
  };

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menuItems.find((i) => i.id === parseInt(id));
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customer.name || !customer.email) return;
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.1 ? resolve() : reject(new Error('Server error'));
        }, 2000);
      });
      setSubmitted(true);
    } catch (err) {
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main className="order-page container">
        <h1>Order Confirmed</h1>
        <p>Thank you, {customer.name}! Your order has been placed.</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button className="btn" onClick={() => { setSubmitted(false); setCart({}); setCustomer({ name: '', email: '', phone: '' }); }}>Order Again</button>
          <a href="/menu" className="btn btn-outline">Back to Menu</a>
        </div>
      </main>
    );
  }

  return (
    <main className="order-page">
      <div className="breadcrumb container">
        <a href="/">Home</a> &gt; <span>Order Online</span>
      </div>
      <header className="order-header container">
        <h1>Order Online</h1>
        <p>Select items and place your order for pickup or delivery.</p>
        <a href="/" className="btn back-home">Back to Home</a>
      </header>

      <section className="order-menu container">
        <h2>Menu Items</h2>
        <div className="order-grid">
          {menuItems.map((item) => (
            <article key={item.id} className="order-card">
              <img src={item.img} alt={item.name} className="order-img" />
              <div className="order-info">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <p className="price">${item.price}</p>
                <div className="order-controls">
                  <button className="btn" onClick={() => removeFromCart(item.id)} disabled={!cart[item.id]}>-</button>
                  <span>{cart[item.id] || 0}</span>
                  <button className="btn" onClick={() => addToCart(item.id)}>+</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="order-cart container">
        <h2>Your Order</h2>
        {Object.keys(cart).length === 0 ? (
          <p>No items selected.</p>
        ) : (
          <div>
            {Object.entries(cart).map(([id, qty]) => {
              const item = menuItems.find((i) => i.id === parseInt(id));
              return (
                <div key={id} className="cart-item">
                  <span>{item.name} x{qty}</span>
                  <span>${item.price * qty}</span>
                </div>
              );
            })}
            <div className="cart-total">
              <strong>Total: ${total}</strong>
            </div>
          </div>
        )}
      </section>

      <form className="order-form container" onSubmit={handleSubmit}>
        <h2>Customer Details</h2>
        <label>
          Name *
          <input type="text" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} required />
        </label>
        <label>
          Email *
          <input type="email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} required />
        </label>
        <label>
          Phone
          <input type="tel" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} />
        </label>
        <button type="submit" className="btn" disabled={Object.keys(cart).length === 0 || loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </main>
  );
};

export default OrderOnlineApp;