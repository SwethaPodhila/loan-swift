import React, { useState } from "react";

function ApplyLoanSection() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        loanType: "",
        amount: "",
        city: "",
        income: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Application submitted successfully! We will contact you shortly.");
    };

    return (
        <>
            <section id="apply" className="apply-section py-5">

                <div className="container">

                    <h2 className="text-center fw-bold mb-3">
                        Apply for a <span className="text-warning">Loan</span>
                    </h2>

                    <p className="text-center text-light mb-5">
                        Fill in your details and we'll get back to you.
                    </p>

                    <div className="row justify-content-center">

                        <div className="col-md-8">

                            <form
                                onSubmit={handleSubmit}
                                className="card shadow p-4 apply-form"
                            >

                                <div className="row">

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="john@email.com"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+91 9876543210"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Loan Type
                                        </label>

                                        <select
                                            name="loanType"
                                            className="form-select"
                                            value={form.loanType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select Loan Type</option>
                                            <option value="personal">Personal Loan</option>
                                            <option value="home">Home Loan</option>
                                            <option value="business">Business Loan</option>
                                            <option value="education">Education Loan</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Loan Amount
                                        </label>

                                        <input
                                            type="number"
                                            name="amount"
                                            className="form-control"
                                            value={form.amount}
                                            onChange={handleChange}
                                            placeholder="500000"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            City
                                        </label>

                                        <input
                                            type="text"
                                            name="city"
                                            className="form-control"
                                            value={form.city}
                                            onChange={handleChange}
                                            placeholder="Hyderabad"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Monthly Income
                                        </label>

                                        <input
                                            type="number"
                                            name="income"
                                            className="form-control"
                                            value={form.income}
                                            onChange={handleChange}
                                            placeholder="50000"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Upload Document
                                        </label>

                                        <input
                                            type="file"
                                            className="form-control"
                                        />
                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-warning w-100 mt-3 fw-semibold"
                                >
                                    Submit Application
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </section>

            {/* Internal CSS */}

            <style>
                {`

        .apply-section{
          background:#0f172a;
          color:white;
        }

        .apply-form{
          border-radius:12px;
        }

        .apply-form input,
        .apply-form select{
          padding:10px;
        }

        `}
            </style>
        </>
    );
}

export default ApplyLoanSection;