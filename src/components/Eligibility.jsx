import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Eligibility() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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


    const loanData = {
        "Personal Loan": [
            "Age: 21 – 60 years",
            "Minimum Salary: ₹15,000 – ₹25,000 per month",
            "Employment: Salaried / Self-employed",
            "Work Experience: 6 months – 1 year",
            "Credit Score: 650+",
            "Indian citizen"
        ],
        "Home Loan": [
            "Age: 21 – 65 years",
            "Stable income (salary or business)",
            "Minimum salary: ₹25,000+",
            "Work experience: 2+ years",
            "Credit Score: 700+",
            "Property documents required",
            "EMI should be less than 40–50% of monthly income"
        ],
        "Car Loan": [
            "Age: 21 – 60 years",
            "Minimum income: ₹20,000+",
            "Work experience: 1 year",
            "Credit Score: 650+",
            "Valid ID proof & address proof"
        ],
        "Gold Loan": [
            "Age: 18+",
            "Must have gold ornaments",
            "Gold purity: 18–22 karat",
            "ID proof required",
            "Income proof mostly not required"
        ],
        "Business Loan": [
            "Age: 21 – 65 years",
            "Business should exist minimum 2 years",
            "Annual turnover required",
            "Credit Score: 700+",
            "Business documents & bank statements"
        ],
        "Education Loan": [
            "Age: 18 – 35 years",
            "Admission in recognized college",
            "Co-applicant required",
            "Academic record required",
            "Income proof of co-applicant"
        ],
        "Bike Loan": [
            "Age: 18 – 60 years",
            "Minimum income: ₹10,000 – ₹15,000",
            "Work experience: 6 months",
            "Credit Score: 650+",
            "ID proof and address proof"
        ]
    };

    const [selectedLoan, setSelectedLoan] = useState("Personal Loan");

    return (
        <>
            <style>
                {`

.eligibility-section{
background:linear-gradient(135deg,#f8fafc,#eef2f7);
}

/* Section Title */

.section-title{
font-weight:700;
color:#0f172a;
letter-spacing:0.5px;
}

/* Loan Cards */

.loan-card{
cursor:pointer;
border-radius:12px;
padding:16px;
transition:all 0.25s ease;
border:1px solid #e5e7eb;
font-weight:600;
text-align:center;
background:white;
color:#0f172a;
}

.loan-card:hover{
transform:translateY(-4px);
box-shadow:0 8px 18px rgba(0,0,0,0.08);
border-color:#FFC107;
}

/* Active Loan */

.active-loan{
background:#FFC107;
color:#0f172a;
border-color:#FFC107;
box-shadow:0 6px 15px rgba(0,0,0,0.08);
}

/* Eligibility Panel */

.eligibility-panel{
background:white;
border-radius:16px;
overflow:hidden;
box-shadow:0 20px 35px rgba(0,0,0,0.08);
border:1px solid #f1f1f1;
}

/* Panel Header */

.panel-header{
background:#0f172a;
color:white;
padding:24px;
}

.panel-header h4{
margin:0;
font-weight:700;
font-size:22px;
}

.panel-header p{
margin:4px 0 0;
font-size:14px;
opacity:0.85;
}

/* Panel Body */

.panel-body{
padding:28px;
}

/* Eligibility Item */

.eligibility-item{
display:flex;
align-items:center;
gap:14px;
padding:12px 0;
border-bottom:1px solid #f1f1f1;
font-size:15px;
color:#374151;
}

.eligibility-item:last-child{
border-bottom:none;
}

/* Check Icon */

.check-icon{
background:#FFC107;
color:#0f172a;
padding:6px 10px;
border-radius:50%;
font-size:13px;
font-weight:700;
}

/* Apply Section */

.apply-box{
background:#f9fafb;
padding:28px;
text-align:center;
border-top:1px solid #eee;
}

.apply-box h6{
font-weight:700;
color:#0f172a;
margin-bottom:6px;
}

.apply-box p{
font-size:14px;
color:#6b7280;
margin-bottom:15px;
}

/* Apply Button */

.apply-btn{
background:#FFC107;
color:#0f172a;
border:none;
padding:10px 26px;
border-radius:25px;
font-weight:600;
transition:all 0.25s ease;
}

.apply-btn:hover{
background:#eab308;
transform:translateY(-1px);
}
`}
            </style>

            <section className="eligibility-section py-5" id="eligibility">


                <div className="container">

                    <h2 className="text-center section-title mb-5">
                        Loan <span className="text-warning">Eligibility Criteria</span>
                    </h2>

                    <div className="row">

                        {/* Loan Cards */}
                        <div className="col-md-4">

                            <div className="row g-3">

                                {Object.keys(loanData).map((loan, index) => (
                                    <div className="col-12" key={index}>

                                        <div
                                            className={`loan-card ${selectedLoan === loan ? "active-loan" : ""}`}
                                            onClick={() => setSelectedLoan(loan)}
                                        >

                                            {loan}

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>


                        {/* Eligibility Panel */}
                        <div className="col-md-8">

                            <div className="eligibility-panel">

                                <div className="panel-header">
                                    <h4>{selectedLoan}</h4>
                                    <p>Eligibility Requirements</p>
                                </div>

                                <div className="panel-body">

                                    {loanData[selectedLoan].map((item, index) => (
                                        <div key={index} className="eligibility-item">
                                            <span className="check-icon">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}

                                </div>

                                <div className="apply-box">

                                    <h6>Ready to Apply?</h6>
                                    <p>Check your eligibility and apply instantly.</p>

                                    <button className="apply-btn" onClick={() => handleScroll("apply")}>
                                        Apply Now
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    );
}

export default Eligibility;