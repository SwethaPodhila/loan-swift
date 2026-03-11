import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = ["Home", "Loans", "Eligibility", "Calculator", "Contact"];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleScroll = (id) => {
    setOpen(false); // close mobile menu

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Already on Home page
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container">

          {/* Logo */}
          <a className="navbar-brand fw-bold" href="#">
            <span className="text-warning">Loan</span>Swift
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center">

              {navItems.map((item) => (
                <li className="nav-item" key={item}>
                  <button
                    className="nav-link custom-link btn btn-link"
                    onClick={() => handleScroll(item.toLowerCase())}
                  >
                    {item}
                  </button>
                </li>
              ))}

              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <button
                  className="btn btn-warning fw-semibold px-4"
                  onClick={() => handleScroll("apply")}
                >
                  Apply Loan
                </button>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      {/* Internal CSS */}
      <style>
        {`
          .navbar-brand{
            font-size:24px;
            letter-spacing:1px;
          }

          .custom-link{
            font-weight:500;
            margin-left:15px;
            transition:0.3s;
          }

          .custom-link:hover{
            color:#ffc107 !important;
          }

          .navbar{
            padding:15px 0;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
