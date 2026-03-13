import React, { useState } from "react";

function LoanCalculatorSection() {
    const [amount, setAmount] = useState(500000);
    const [rate, setRate] = useState(8.5);
    const [tenure, setTenure] = useState(12);
    const [emi, setEmi] = useState(null);
    const [phone, setPhone] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [name, setName] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const calculateEmi = () => {
        const r = rate / 12 / 100;
        const n = tenure;

        const e =
            (amount * r * Math.pow(1 + r, n)) /
            (Math.pow(1 + r, n) - 1);

        setEmi(Math.round(e));
    };

    const calculate = async () => {

        if (!phone) {
            alert("Please enter mobile number");
            return;
        }

        try {

            const res = await fetch("https://loan-swift-backend.onrender.com/loans/check-number", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ phone })
            });

            const data = await res.json();

            if (data.exists) {

                // number already exists
                calculateEmi();

            } else {

                // open popup for otp verification
                setShowPopup(true);
            }

        } catch (err) {
            console.log(err);
        }

    };

    const sendOtp = async () => {

        if (!name) {
            alert("Please enter name");
            return;
        }

        try {

            const res = await fetch("https://loan-swift-backend.onrender.com/loans/calculateSendOtp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    phone
                })
            });

            const data = await res.json();

            if (data.success) {
                alert("OTP sent successfully");
                setOtpSent(true);
            }

        } catch (error) {
            console.log(error);
        }

    };

    const verifyOtp = async () => {

        if (!otp) {
            alert("Enter OTP");
            return;
        }

        try {

            const res = await fetch("https://loan-swift-backend.onrender.com/loans/verify-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phone,
                    otp
                })
            });

            const data = await res.json();

            if (data.success) {

                alert("OTP Verified");

                setShowPopup(false);

                calculateEmi(); // EMI calculate after verification

            } else {
                alert("Invalid OTP");
            }

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <>
            <section id="calculator" className="calculator-section py-5">
                <div className="container">

                    <h2 className="text-center fw-bold mb-3">
                        Loan <span className="text-warning">Calculator</span>
                    </h2>

                    <p className="text-center text-muted mb-5">
                        Estimate your monthly EMI before applying.
                    </p>

                    <div className="row justify-content-center">
                        <div className="col-md-6">

                            <div className="card shadow calculator-card p-4">

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Loan Amount (₹)
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        value={amount}
                                        onChange={(e) => setAmount(+e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Interest Rate (%)
                                    </label>

                                    <input
                                        type="number"
                                        step="0.1"
                                        className="form-control"
                                        value={rate}
                                        onChange={(e) => setRate(+e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Tenure (months)
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        value={tenure}
                                        onChange={(e) => setTenure(+e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Mobile Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                <button onClick={calculate}>
                                    Calculate EMI
                                </button>

                                {emi !== null && (
                                    <div className="emi-result text-center mt-4 pt-3 border-top">
                                        <p className="text-muted mb-1">
                                            Your Estimated Monthly EMI
                                        </p>

                                        <h3 className="fw-bold text-warning">
                                            ₹{emi.toLocaleString()}
                                        </h3>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {showPopup && (

                <div className="popup">

                    <div>

                        <h3>Enter Details</h3>

                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Mobile Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <button onClick={sendOtp}>
                            Send OTP
                        </button>

                        {otpSent && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />

                                <button onClick={verifyOtp}>
                                    Verify OTP
                                </button>
                            </>
                        )}

                    </div>

                </div>

            )}
            {/* Internal CSS */}

            <style>
                {`

        .calculator-section{
          background:#f8f9fa;
        }

        .calculator-card{
          border-radius:12px;
        }

        .calculator-card input{
          padding:10px;
        }

        .emi-result h3{
          font-size:32px;
        }
          .popup{
 position: fixed;
 top:0;
 left:0;
 width:100%;
 height:100%;
 background:rgba(0,0,0,0.6);
 display:flex;
 justify-content:center;
 align-items:center;
 z-index:1000;
}

.popup > div{
 background:white;
 padding:30px;
 border-radius:10px;
 width:350px;
 text-align:center;
}

.popup input{
 width:100%;
 padding:10px;
 margin:10px 0;
 border:1px solid #ccc;
 border-radius:5px;
}

.popup button{
 width:100%;
 padding:10px;
 background:#ffc107;
 border:none;
 border-radius:5px;
 margin-top:10px;
}

        `}

            </style>
        </>
    );
}

export default LoanCalculatorSection;
