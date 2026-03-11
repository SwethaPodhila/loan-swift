import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminLogin() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("https://loan-swift-backend.onrender.com/auth/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        const data = await res.json();

      //  alert(data.message);

        // ✅ login success
        if (res.ok) {

            // store token
            localStorage.setItem("adminToken", data.token);

            // redirect to dashboard
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
                    width: "400px",
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

                    <h5 className="text-center mb-4">Admin Login</h5>

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

                        <button
                            className="btn w-100"
                            style={{
                                background: "#ffc107",
                                fontWeight: "600"
                            }}
                        >
                            Login
                        </button>

                    </form>

                    <p className="text-center mt-3">
                        Don't have account? <a href="/admin/signup">Signup</a>
                    </p>

                </div>

            </div>
            <Footer />
        </>

    );
}

export default AdminLogin;
