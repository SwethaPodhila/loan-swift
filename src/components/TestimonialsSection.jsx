import React from "react";
import { Star } from "lucide-react";

function TestimonialsSection() {

    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Business Owner",
            text: "LoanSwift made my business loan process incredibly smooth. Funds were in my account within 48 hours!",
            rating: 5
        },
        {
            name: "Rahul Verma",
            role: "Software Engineer",
            text: "Got my home loan at an amazing rate. The team was very supportive throughout the process.",
            rating: 5
        },
        {
            name: "Anita Desai",
            role: "Teacher",
            text: "I applied for an education loan and was impressed by how easy and transparent everything was.",
            rating: 4
        }
    ];

    return (
        <>
            <section className="testimonial-section py-5">

                <div className="container">

                    <h2 className="text-center fw-bold mb-3 text-white">
                        What Our <span className="text-warning">Customers</span> Say
                    </h2>

                    <p className="text-center text-light mb-5">
                        Real stories from real customers.
                    </p>

                    <div className="row">

                        {testimonials.map((t, index) => (

                            <div className="col-md-4 mb-4" key={index}>

                                <div className="card testimonial-card h-100 shadow">

                                    <div className="card-body">

                                        {/* Stars */}
                                        <div className="mb-3">

                                            {Array.from({ length: 5 }).map((_, i) => (

                                                <Star
                                                    key={i}
                                                    size={18}
                                                    className={i < t.rating ? "star-filled me-1" : "star-empty me-1"}
                                                />

                                            ))}

                                        </div>

                                        {/* Review */}
                                        <p className="text-muted fst-italic">
                                            "{t.text}"
                                        </p>

                                        {/* User */}
                                        <div className="d-flex align-items-center mt-4">

                                            <div className="user-circle me-3">
                                                {t.name.charAt(0)}
                                            </div>

                                            <div>
                                                <h6 className="mb-0 fw-bold">
                                                    {t.name}
                                                </h6>

                                                <small className="text-muted">
                                                    {t.role}
                                                </small>
                                            </div>

                                        </div>

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

        .testimonial-section{
          background:#0b1f3a;
        }

        .testimonial-card{
          border-radius:12px;
        }

        .star-filled{
          color:#ffc107;
          fill:#ffc107;
        }

        .star-empty{
          color:#ccc;
        }

        .user-circle{
          width:45px;
          height:45px;
          background:#ffc107;
          color:#000;
          font-weight:bold;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:50%;
        }

        `}
            </style>
        </>
    );
}

export default TestimonialsSection;