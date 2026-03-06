import React, { useState, useEffect } from "react";

import hero1 from "../assests/hero-banner.jpg";
import hero2 from "../assests/hero-banner2.jpg";
import hero3 from "../assests/hero-banner3.jpg";

function HeroSection() {

  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  // Auto image change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollNext = () => {
    document.getElementById("loans").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <section
        id="home"
        className="hero-section"
        style={{ backgroundImage: `url(${images[current]})` }}
      >

        <div className="hero-overlay"></div>

        <div className="container hero-content text-center">

          <h1>
            Get Instant Loans with <span>Low Interest</span>
          </h1>

          <p>
            Apply online and receive funds quickly with our simple loan process.
          </p>

          <div className="hero-buttons">

            <a href="#apply" className="btn btn-warning btn-lg">
              Apply Now
            </a>

            <a href="#eligibility" className="btn btn-outline-light btn-lg">
              Check Eligibility
            </a>

          </div>

        </div>

        {/* Scroll Arrow */}
        <div className="scroll-down" onClick={scrollNext}>
          ↓
        </div>

      </section>

      <style>
        {`

        .hero-section{
          height:100vh;
          background-size:cover;
          background-position:center;
          position:relative;
          color:white;
          display:flex;
          align-items:center;
          justify-content:center;
          transition:background-image 1s ease-in-out;
        }

        .hero-overlay{
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          background:rgba(0,0,0,0.65);
        }

        .hero-content{
          position:relative;
          z-index:2;
          max-width:700px;
        }

        .hero-content h1{
          font-size:52px;
          font-weight:700;
        }

        .hero-content span{
          color:#ffc107;
        }

        .hero-content p{
          font-size:18px;
          margin:20px 0;
          color:#ddd;
        }

        .hero-buttons{
          display:flex;
          justify-content:center;
          gap:20px;
          flex-wrap:wrap;
        }

        .hero-buttons .btn{
          padding:12px 28px;
          font-weight:600;
        }

        /* Scroll Button */

        .scroll-down{
          position:absolute;
          bottom:80px;
          left:50%;
          transform:translateX(-50%);
          width:50px;
          height:50px;
          border-radius:50%;
          border:2px solid white;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:28px;
          cursor:pointer;
          animation:bounce 2s infinite;
          z-index:3;
          transition:0.3s;
        }

        .scroll-down:hover{
          background:#ffc107;
          color:black;
          border-color:#ffc107;
        }

        @keyframes bounce{
          0%,20%,50%,80%,100%{
            transform:translate(-50%,0);
          }
          40%{
            transform:translate(-50%,10px);
          }
          60%{
            transform:translate(-50%,5px);
          }
        }

        `}
      </style>
    </>
  );
}

export default HeroSection;