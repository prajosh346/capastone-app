import React, { useState } from "react";
import './Reservation.css';

const ReservationsApp = () => {
    const [form, setForm] = useState({ name: '', date: '', time: '', people: 2, contact: '' });
    const [error, setError] = useState('');
    const [confirmed, setConfirmed] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };

    const validate = () => {
        if (!form.name.trim()) return 'Please enter your name.';
        if (!form.date) return 'Please select a date.';
        if (!form.time) return 'Please select a time.';
        if (!form.contact.trim()) return 'Please provide a phone or email.';
        return '';
    };

const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (v) { setError(v); return; }
    setError('');
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (Math.random() > 0.1) {
        setConfirmed({ ...form });
      } else {
        setError('Failed to submit reservation. Please try again.');
      }
      setLoading(false);
    }, 2000);
  };

    return (
        <main className="reservation-page container">
            <div className="breadcrumb">
                <a href="/">Home</a> &gt; <span>Reservations</span>
            </div>
            <header className="res-header">
                <h1>Reserve a Table</h1>
                <p>Book a table quickly — we'll confirm your reservation shortly.</p>
                <a href="/" className="btn back-home">Back to Home</a>
            </header>

            {confirmed ? (
                <section className="res-confirm">
                    <h2>Reservation Confirmed</h2>
                    <p>
                        Thanks, <strong>{confirmed.name}</strong>. We've reserved a table for <strong>{confirmed.people}</strong> on <strong>{confirmed.date}</strong> at <strong>{confirmed.time}</strong>.
                    </p>
                    <p>We will contact you at: <strong>{confirmed.contact}</strong></p>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <button className="btn" onClick={() => { setConfirmed(null); setForm({ name: '', date: '', time: '', people: 2, contact: '' }); }}>Make another reservation</button>
                        <a href="/menu" className="btn btn-outline">View Menu</a>
                    </div>
                </section>
            ) : (
                <form className="res-form" onSubmit={handleSubmit} noValidate>
                    {error && <div className="res-error">{error}</div>}
                    <label>
                        Name
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
                    </label>

                    <div className="res-row">
                        <label>
                            Date
                            <input type="date" name="date" value={form.date} onChange={handleChange} />
                        </label>

                        <label>
                            Time
                            <input type="time" name="time" value={form.time} onChange={handleChange} />
                        </label>
                    </div>

                    <div className="res-row">
                        <label>
                            People
                            <input type="number" name="people" min="1" max="20" value={form.people} onChange={handleChange} />
                        </label>

                        <label>
                            Contact (phone or email)
                            <input name="contact" value={form.contact} onChange={handleChange} placeholder="Phone or email" />
                        </label>
                    </div>

                    <div className="res-actions">
                        <button type="submit" className="btn" disabled={loading}>
                            {loading ? 'Submitting...' : 'Confirm Reservation'}
                        </button>
                    </div>
                </form>
            )}
        </main>
    );
};

export default ReservationsApp;