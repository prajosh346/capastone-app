import "../css folders/contact.css";
function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          Feel free to reach out or visit us. We look forward to serving you!
        </p>

        <p>
          <strong>📍 Address:</strong>
          <br />
          123 Mediterranean Avenue,
          <br />
          Chicago, IL 60601
        </p>

        <p>
          <strong>📞 Phone:</strong>
          <br />
          +1 (312) 555-0198
        </p>

        <p>
          <strong>📧 Email:</strong>
          <br />
          contact@littlelemon.com
        </p>

        <p>
          <strong>⏰ Opening Hours:</strong>
          <br />
          Mon – Fri: 11:00 AM – 10:00 PM
          <br />
          Sat – Sun: 10:00 AM – 11:00 PM
        </p>
      </div>
    </main>
  );
}

export default Contact;
