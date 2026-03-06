import React from "react";
import { FileText, Upload, CheckCircle, Banknote } from "lucide-react";

const steps = [
    { icon: FileText, title: "Fill Application", desc: "Complete a simple online form" },
    { icon: Upload, title: "Upload Documents", desc: "Submit your KYC documents" },
    { icon: CheckCircle, title: "Approval Process", desc: "Quick verification & approval" },
    { icon: Banknote, title: "Receive Funds", desc: "Get funds in your account" },
];

const HowItWorksSection = () => {
    return (
        <section className="how-section">

            <style>
                {`
        .how-section{
          padding:80px 0;
          background:#0b1d3a;
          color:white;
          text-align:center;
        }

        .how-title{
          font-size:36px;
          font-weight:bold;
          margin-bottom:10px;
        }

        .how-title span{
          color:#FFC107;
        }

        .how-subtitle{
          color:#ccc;
          margin-bottom:50px;
        }

        .step-box{
          position:relative;
          padding:25px;
          transition:0.3s;
        }

        .step-box:hover{
          transform:translateY(-8px);
        }

        .step-icon{
          width:80px;
          height:80px;
          border-radius:50%;
          background:#FFC107;
          display:flex;
          align-items:center;
          justify-content:center;
          margin:auto;
          margin-bottom:20px;
        }

        .step-number{
          position:absolute;
          top:-10px;
          left:50%;
          transform:translateX(-50%);
          font-size:60px;
          color:rgba(255,255,255,0.08);
          font-weight:bold;
          z-index:0;
        }

        .step-title{
          font-size:18px;
          font-weight:bold;
          margin-bottom:6px;
        }

        .step-desc{
          color:#bbb;
          font-size:14px;
        }
        `}
            </style>

            <div className="container">

                <h2 className="how-title">
                    How It <span>Works</span>
                </h2>

                <p className="how-subtitle">
                    Get your loan in four simple steps
                </p>

                <div className="row">

                    {steps.map((step, i) => {
                        const Icon = step.icon;

                        return (
                            <div key={i} className="col-md-3 col-sm-6 mb-4">

                                <div className="step-box">

                                    <span className="step-number">{i + 1}</span>

                                    <div className="step-icon">
                                        <Icon size={32} color="black" />
                                    </div>

                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-desc">{step.desc}</p>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default HowItWorksSection;
