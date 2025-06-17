import "../styles/contact.css";  // 🔥 Import CSS file

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="input" />
          <input type="email" placeholder="Your Email" className="input" />
          <textarea placeholder="Your Message" className="textarea"></textarea>
          <button className="send-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}
