import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Loans", "Eligibility", "Calculator", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);

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
                  <a
                    className="nav-link custom-link"
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}

              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <a
                  href="#apply"
                  className="btn btn-warning fw-semibold px-4"
                  onClick={() => setOpen(false)}
                >
                  Apply Loan
                </a>
              </li>

              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <a
                  href="/admin/login"
                  className="btn btn-warning fw-semibold px-4"
                  onClick={() => setOpen(false)}
                >
                  Admin Signup
                </a>
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
