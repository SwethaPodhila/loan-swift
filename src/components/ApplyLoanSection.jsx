import React, { useState } from "react";

function ApplyLoanSection() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        name: "",
        dob: "",
        phone: "",
        otp: "",
        email: "",
        loanType: "",
        income: "",
        employment: "",
        cibil: "",
        emi: "",
        address: "",
        pincode: ""
    });
    const [otpSent, setOtpSent] = useState(false);
    const [verified, setVerified] = useState(false);
    const [applicationId, setApplicationId] = useState(null); // store created application ID

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendOtp = async () => {
        if (!form.phone || form.phone.length !== 10) return alert("Enter valid phone");

        try {
            const resOtp = await fetch("https://loan-swift-backend.onrender.com/loans/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone: form.phone })
            });

            const otpData = await resOtp.json();
            if (otpData.success) {
                setApplicationId(otpData.data._id); // get application id from backend
                setOtpSent(true);
                alert("OTP Sent Successfully!");
            } else {
                alert("Failed to send OTP");
            }
        } catch (err) {
            console.error(err);
            alert("Server error");
        }
    };

    // 2️⃣ Verify OTP
    const verifyOtp = async () => {
        if (form.otp.length !== 6) return alert("Enter 6-digit OTP");

        try {
            const res = await fetch("https://loan-swift-backend.onrender.com/loans/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone: form.phone, otp: form.otp })
            });
            const data = await res.json();
            if (data.success) {
                setVerified(true);
                alert("OTP Verified Successfully!");
            } else {
                alert("Invalid OTP");
            }
        } catch (err) {
            console.error(err);
            alert("Server error during OTP verification");
        }
    };

    // 3️⃣ Submit final form (update remaining details)
    const submitApplication = async () => {
        if (!applicationId) return alert("Application ID not found");

        try {
            const res = await fetch(`https://loan-swift-backend.onrender.com/loans/${applicationId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (data.success) {
                alert("We received your application and our team will get back to you soon, Thank You!");
                // reset form
                setForm({
                    name: "",
                    dob: "",
                    phone: "",
                    otp: "",
                    email: "",
                    loanType: "",
                    income: "",
                    employment: "",
                    cibil: "",
                    emi: "",
                    address: "",
                    pincode: ""
                });
                setStep(1);
                setOtpSent(false);
                setVerified(false);
                setApplicationId(null);
            } else {
                alert("Failed to submit application");
            }
        } catch (err) {
            console.error(err);
            alert("Server error during submission");
        }
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <section className="apply-section" id="apply">
            <div className="container">
                <h2 className="main-heading">
                    Apply for a <span className="highlight">Loan</span>
                </h2>
                <p className="text-center">Fill in the details below to apply for a loan.</p>

                {/* STEP INDICATOR */}
                <div className="steps">
                    <span className={step >= 1 ? "active" : ""}>1</span>
                    <span className={step >= 2 ? "active" : ""}>2</span>
                    <span className={step >= 3 ? "active" : ""}>3</span>
                    <span className={step >= 4 ? "active" : ""}>4</span>
                    <div className="line"></div>
                </div>
                <div className="step-labels">
                    <span>Personal</span>
                    <span>Loan Details</span>
                    <span>Financial</span>
                    <span>Address</span>
                </div>

                <div className="form-box">

                    {/* STEP 1 - PERSONAL */}
                    {step === 1 && (
                        <>
                            <h4 className="step-heading">Personal Details</h4>


                            {/* Other personal fields */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <input
                                type="date"
                                name="dob"
                                value={form.dob}
                                onChange={handleChange}
                            />

                            {/* Phone */}
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Mobile Number"
                                value={form.phone}
                                onChange={handleChange}
                            />

                            {/* Send OTP button */}
                            {!otpSent && (
                                <button className="otpBtn" onClick={sendOtp}>
                                    Send OTP
                                </button>
                            )}

                            {/* OTP input & Verify button */}
                            {otpSent && !verified && (
                                <>
                                    <input
                                        type="text"
                                        name="otp"
                                        placeholder="Enter OTP"
                                        value={form.otp}
                                        onChange={handleChange}
                                    />
                                    <button className="otpBtn" onClick={verifyOtp}>
                                        Verify OTP
                                    </button>
                                </>
                            )}

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                            />

                            {/* Next button enabled only after OTP verified AND all fields filled */}
                            <button
                                className="nextBtn"
                                disabled={
                                    !verified ||
                                    !form.phone ||
                                    !form.name ||
                                    !form.dob
                                }
                                onClick={nextStep}
                            >
                                Next
                            </button>
                        </>
                    )}

                    {/* STEP 2 - LOAN DETAILS */}
                    {step === 2 && (
                        <>
                            <h4 className="step-heading">Loan Details</h4>

                            <select name="loanType" onChange={handleChange} value={form.loanType}>
                                <option value="">Select Loan Type</option>
                                <option>Personal Loan</option>
                                <option>Home Loan</option>
                                <option>Business Loan</option>
                                <option>Education Loan</option>
                                <option>Car Loan</option>
                                <option>Gold Loan</option>
                            </select>

                            <input
                                type="number"
                                name="income"
                                placeholder="Monthly Income"
                                value={form.income}
                                onChange={handleChange}
                            />
                            <br></br>
                            {/* New heading for radio buttons */}
                            <p className="radio-heading">Employment Type</p>
                            <div className="employment">

                                <label>
                                    <input type="radio" name="employment" value="Salaried" onChange={handleChange} /> Salaried
                                </label>
                                <label>
                                    <input type="radio" name="employment" value="Self Employed" onChange={handleChange} /> Self Employed
                                </label>
                                <label>
                                    <input type="radio" name="employment" value="Private Employee" onChange={handleChange} /> Private Employee
                                </label>
                                <label>
                                    <input type="radio" name="employment" value="Government Employee" onChange={handleChange} /> Government Employee
                                </label>
                            </div>

                            <div className="btns">
                                <button onClick={prevStep}>Back</button>
                                <button
                                    disabled={!form.loanType || !form.income || !form.employment}
                                    onClick={nextStep}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}

                    {/* STEP 3 - FINANCIAL */}
                    {step === 3 && (
                        <>
                            <h4 className="step-heading">Financial Details</h4>
                            <input type="number" name="cibil" placeholder="CIBIL Score (Optional)" value={form.cibil} onChange={handleChange} />
                            <input type="number" name="emi" placeholder="Current EMI Payments" value={form.emi} onChange={handleChange} />

                            <div className="btns">
                                <button onClick={prevStep}>Back</button>
                                <button disabled={!form.emi} onClick={nextStep}>Next</button>
                            </div>
                        </>
                    )}

                    {/* STEP 4 - ADDRESS */}
                    {step === 4 && (
                        <>
                            <h4 className="step-heading">Address</h4>
                            <textarea name="address" placeholder="Full Address" value={form.address} onChange={handleChange} />
                            <input type="number" name="pincode" placeholder="Pin Code" value={form.pincode} onChange={handleChange} />

                            <div className="btns">
                                <button onClick={prevStep}>Back</button>
                                <button disabled={!form.address || !form.pincode} onClick={submitApplication}>Submit</button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* CSS */}
            <style>{`
  .apply-section {
    background: #0f172a;
    padding: 60px 20px;
    color: white;
    font-family: sans-serif;
  }

  .main-heading {
    font-size: 32px;
    text-align: center;
    margin-bottom: 40px;
  }

  .main-heading .highlight {
    color: #FFC107;
  }

  .steps {
    display: flex;
    justify-content: center;
    gap: 140px; /* changed from 60px to 160px */
    position: relative;
    margin-bottom: 10px;
  }

  .steps span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e2e8f0;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    z-index: 1;
    position: relative;
  }

  .steps span.active {
    background:#FFC107;
    color: white;
  }

  .steps .line {
    position: absolute;
    top: 50%;
    left: 30%;
    right: 30%;
    height: 3px;
    background: #ccc;
    z-index: 0;
  }

  .step-labels {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: 0 auto 30px;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .form-box {
    background: white;
    color: black;
    padding: 30px;
    border-radius: 12px;
    max-width: 600px;
    margin: auto;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }

  .form-box input,
  .form-box select,
  .form-box textarea {
    width: 100%;
    padding: 12px;
    margin-top: 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
    transition: 0.3s;
  }

  .form-box input:focus,
  .form-box select:focus,
  .form-box textarea:focus {
    border-color: #FFC107;
    box-shadow: 0 0 5px rgba(245,158,11,0.4);
  }

  .step-heading {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .otpBtn {
    margin-top: 10px;
    background: #FFC107;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
  }

  .otpBtn:hover {
    opacity: 0.9;
  }

  .nextBtn {
    margin-top: 20px;
    background: #FFC107;
    border: none;
    padding: 12px;
    width: 100%;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  .nextBtn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btns {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .btns button {
    background: #FFC107;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
  }

  .btns button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btns button:hover:not(:disabled) {
    opacity: 0.9;
  }

  .employment {
    display: flex;
    gap: 20px;
    margin-top: 4px;
  }

  textarea {
    height: 80px;
  }
`}</style>
        </section>
    );
}

export default ApplyLoanSection;
