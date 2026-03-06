import React, { useState } from "react";

function LoanCalculatorSection() {
    const [amount, setAmount] = useState(500000);
    const [rate, setRate] = useState(8.5);
    const [tenure, setTenure] = useState(12);
    const [emi, setEmi] = useState(null);

    const calculate = () => {
        const r = rate / 12 / 100;
        const n = tenure;

        const e =
            (amount * r * Math.pow(1 + r, n)) /
            (Math.pow(1 + r, n) - 1);

        setEmi(Math.round(e));
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

                                <button
                                    onClick={calculate}
                                    className="btn btn-warning w-100 fw-semibold"
                                >
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

        `}
            </style>
        </>
    );
}

export default LoanCalculatorSection;
