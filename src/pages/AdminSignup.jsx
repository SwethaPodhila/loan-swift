import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminSignup() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/auth/admin/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        const data = await res.json();

        alert(data.message);

        // ✅ signup success ayithe
        if (res.ok) {

            // token store
            localStorage.setItem("adminToken", data.token);

            // redirect dashboard
            navigate("/admin/dashboard");
        }
    };

    return (
        <>
            <Navbar />
            <div style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg,#0b1f3a,#132f57)"
            }}>

                <div className="card shadow" style={{
                    width: "420px",
                    padding: "30px",
                    borderRadius: "12px"
                }}>

                    <h2 style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        marginBottom: "10px"
                    }}>
                        Loan<span style={{ color: "#ffc107" }}>Swift</span>
                    </h2>

                    <h5 className="text-center mb-4">Admin Signup</h5>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="Enter phone number"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Confirm password"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            className="btn w-100"
                            style={{
                                background: "#ffc107",
                                fontWeight: "600"
                            }}
                        >
                            Create Account
                        </button>

                    </form>

                    <p className="text-center mt-3">
                        Already have account? <a href="/admin/login">Login</a>
                    </p>

                </div>

            </div>
            <Footer />
        </>

    );

}

export default AdminSignup;
