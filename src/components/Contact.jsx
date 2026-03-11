import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/loans/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully! ✅");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.error || "Something went wrong! ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong! ❌");
    }
  };

  return (
    <section id="contact">
      <style>{`
        #contact{
          padding:80px 10%;
          background:#f5f7fb;
        }

        .contact-header{
          text-align:center;
          margin-bottom:40px;
        }

        .contact-header h2{
          font-size:34px;
          font-weight:bold;
        }

        .contact-header span{
          color:#f4b400;
        }

        .contact-header p{
          color:#555;
        }

        .contact-container{
          display:flex;
          gap:30px;
          align-items:stretch;
        }

        .contact-info{
          flex:1;
          background:white;
          padding:30px;
          border-radius:10px;
          box-shadow:0 5px 20px rgba(0,0,0,0.05);
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .info-box{
          display:flex;
          gap:15px;
          margin-bottom:25px;
        }

        .icon{
          background:#f4b400;
          color:white;
          width:45px;
          height:45px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:50%;
          font-size:18px;
        }

        .contact-form{
          flex:2;
          background:white;
          padding:30px;
          border-radius:10px;
          box-shadow:0 5px 20px rgba(0,0,0,0.05);
        }

        .form-row{
          display:flex;
          gap:20px;
          margin-bottom:20px;
        }

        .form-group{
          flex:1;
        }

        input, textarea{
          width:100%;
          padding:12px;
          border:1px solid #ddd;
          border-radius:6px;
          outline:none;
        }

        textarea{
          height:140px;
          resize:none;
        }

        button{
          background:#f4b400;
          border:none;
          padding:12px 25px;
          border-radius:6px;
          font-weight:bold;
          cursor:pointer;
        }

        button:hover{
          background:#e0a800;
        }

        @media(max-width:768px){
          .contact-container{
            flex-direction:column;
          }

          .form-row{
            flex-direction:column;
          }
        }
      `}</style>

      <div className="contact-header">
        <h2>Contact <span>Us</span></h2>
        <p>Have questions about loans? Our team is here to help.</p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <div className="info-box">
            <div className="icon">📍</div>
            <div>
              <h4>Address</h4>
              <p>SR Nagar, Hyderabad, Telangana</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">📞</div>
            <div>
              <h4>Phone</h4>
              <p>+91 1800 123 4567</p>
            </div>
          </div>

          <div className="info-box">
            <div className="icon">✉</div>
            <div>
              <h4>Email</h4>
              <p>info@loanswift.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: "20px" }}>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: "20px" }}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;