import React from "react";
import { ShieldCheck, Zap, Lock, HeartHandshake } from "lucide-react";

function WhyChooseUsSection() {

    const features = [
        {
            icon: <ShieldCheck size={40} />,
            title: "Low Interest",
            desc: "Competitive rates starting from just 8.5% p.a."
        },
        {
            icon: <Zap size={40} />,
            title: "Fast Approval",
            desc: "Get approved within 24 hours of application."
        },
        {
            icon: <Lock size={40} />,
            title: "Secure Process",
            desc: "Bank-grade security for all your data."
        },
        {
            icon: <HeartHandshake size={40} />,
            title: "Trusted Service",
            desc: "Serving 1M+ happy customers nationwide."
        }
    ];

    return (
        <>
            <section className="why-section py-5">

                <div className="container">

                    <h2 className="text-center fw-bold mb-3">
                        Why <span className="text-warning">Choose Us</span>
                    </h2>

                    <p className="text-center text-muted mb-5">
                        We make the loan process simple, fast, and secure.
                    </p>

                    <div className="row">

                        {features.map((feature, index) => (

                            <div className="col-md-3 col-sm-6 mb-4" key={index}>

                                <div className="card text-center shadow-sm h-100 feature-card">

                                    <div className="card-body">

                                        <div className="feature-icon mb-3">
                                            {feature.icon}
                                        </div>

                                        <h5 className="fw-bold">
                                            {feature.title}
                                        </h5>

                                        <p className="text-muted small">
                                            {feature.desc}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Internal CSS */}

            <style>
                {`

        .why-section{
          background:#f8f9fa;
        }

        .feature-card{
          border-radius:12px;
          transition:0.3s;
        }

        .feature-card:hover{
          transform:translateY(-6px);
          box-shadow:0 10px 25px rgba(0,0,0,0.15);
        }

        .feature-icon{
          width:70px;
          height:70px;
          background:#fff3cd;
          color:#ffc107;
          display:flex;
          align-items:center;
          justify-content:center;
          margin:auto;
          border-radius:50%;
        }

        `}
            </style>
        </>
    );
}

export default WhyChooseUsSection;