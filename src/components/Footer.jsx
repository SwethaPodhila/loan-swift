import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const links = ["Home", "Loans", "Eligibility", "Calculator", "Contact"];

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); // small delay to wait for Home page render
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="footer-section text-light">

        <div className="container py-5">

          <div className="row">

            {/* About */}
            <div className="col-md-3 mb-4">
              <h4 className="fw-bold mb-3">
                <span className="text-warning">Loan</span>Swift
              </h4>

              <p className="text-light small">
                India's trusted loan service platform offering quick, secure,
                and affordable financing solutions for everyone.
              </p>
            </div>


            {/* Quick Links */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3">Quick Links</h5>

              <ul className="list-unstyled footer-links">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      className="btn btn-link p-0 footer-link-btn"
                      onClick={() => handleScroll(link.toLowerCase())}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>


            {/* Contact */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3">Contact Us</h5>

              <p className="small">
                <Mail size={16} className="me-2 text-warning" />
                info@loanswift.com
              </p>

              <p className="small">
                <Phone size={16} className="me-2 text-warning" />
                +91 1800 123 4567
              </p>

              <p className="small">
                <MapPin size={16} className="me-2 text-warning" />
                Mumbai, India
              </p>
            </div>


            {/* Social Media */}
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3">Follow Us</h5>

              <div className="d-flex gap-3">

                <a href="#" className="social-icon">
                  <Facebook size={18} />
                </a>

                <a href="#" className="social-icon">
                  <Twitter size={18} />
                </a>

                <a href="#" className="social-icon">
                  <Instagram size={18} />
                </a>

                <a href="#" className="social-icon">
                  <Linkedin size={18} />
                </a>

              </div>
            </div>

          </div>

        </div>


        {/* Copyright */}
        <div className="footer-bottom text-center py-3">
          © 2026 LoanSwift. All rights reserved.
        </div>

      </footer>


      {/* Internal CSS */}

      <style>
        {`

        .footer-section{
          background:#0b1f3a;
        }

        .footer-links li{
          margin-bottom:8px;
        }

        .footer-links a{
          color:#ddd;
          text-decoration:none;
          font-size:14px;
        }

        .footer-links a:hover{
          color:#ffc107;
        }

        .social-icon{
          width:38px;
          height:38px;
          border-radius:50%;
          background:#1a355a;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          transition:0.3s;
        }

        .social-icon:hover{
          background:#ffc107;
          color:#000;
        }

        .footer-bottom{
          border-top:1px solid rgba(255,255,255,0.1);
          font-size:14px;
          color:#aaa;
        }
.footer-link-btn {
  text-decoration: none;
  color: #ddd;
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.footer-link-btn:hover {
  color: #ffc107;
}
        `}
      </style>
    </>
  );
}

export default Footer;