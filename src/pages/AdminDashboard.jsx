import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function AdminDashboard() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    const logout = () => {

        localStorage.removeItem("adminToken")

        navigate("/admin/login")

    }

    useEffect(() => {

        fetch("https://loan-swift-backend.onrender.com/loans/users")
            .then((res) => res.json())
            .then((data) => {

                console.log(data.data)

                setUsers(data.data)

            })

    }, [])

    const downloadCSV = () => {
        if (!users.length) return;

        const headers = ["#", "Name", "Email", "Phone", "Income", "Loan Type", "Address", "EMI"];

        const rows = users.map((user, index) => [
            index + 1,
            user.name,
            user.email,
            user.phone,
            user.income,
            user.loanType,
            user.address,
            user.emi
        ]);

        // Wrap every field in quotes to handle commas
        const csvContent =
            [headers, ...rows]
                .map(row => row.map(field => `"${field}"`).join(","))
                .join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "users_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (

        <div style={{
            background: "linear-gradient(135deg,#0b1f3a,#132f57)",
            minHeight: "100vh"
        }}>

            {/* NAVBAR */}

            <nav className="navbar px-4"
                style={{
                    background: "#0b1f3a",
                    borderBottom: "2px solid #ffc107"
                }}>

                <span className="navbar-brand fw-bold text-white">
                    Loan<span style={{ color: "#ffc107" }}>Swift</span> Admin
                </span>

                <button
                    className="btn"
                    style={{
                        background: "#ffc107",
                        fontWeight: "600"
                    }}
                    onClick={logout}
                >

                    Logout

                </button>

            </nav>


            <div className="container mt-4 text-white">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="mb-4 fw-bold">Admin Dashboard</h3>

                    <div className="mb-3">
                        <button
                            className="btn btn-warning"
                            onClick={downloadCSV}
                        >
                            Download Users as Excel
                        </button>
                    </div>
                </div>
                {/* STAT CARDS */}

                <div className="row mb-4">

                    <div className="col-md-3">
                        <div className="card shadow text-center p-3"
                            style={{
                                borderTop: "4px solid #ffc107"
                            }}>
                            <h6>Total Users</h6>
                            <h3>{users.length}</h3>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card shadow text-center p-3"
                            style={{
                                borderTop: "4px solid #ffc107"
                            }}>
                            <h6>Loan Applications</h6>
                            <h3>45</h3>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card shadow text-center p-3"
                            style={{
                                borderTop: "4px solid #ffc107"
                            }}>
                            <h6>Approved Loans</h6>
                            <h3>20</h3>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card shadow text-center p-3"
                            style={{
                                borderTop: "4px solid #ffc107"
                            }}>
                            <h6>Pending Loans</h6>
                            <h3>25</h3>
                        </div>
                    </div>

                </div>


                {/* USERS TABLE */}

                <div className="card shadow">

                    <div
                        className="card-header"
                        style={{
                            background: "#0b1f3a",
                            color: "#fff",
                            borderBottom: "2px solid #ffc107"
                        }}
                    >

                        <h5 className="mb-0">Registered Users</h5>

                    </div>

                    <div className="card-body">

                        <table className="table table-hover">

                            <thead
                                style={{
                                    background: "#132f57",
                                    color: "#fff"
                                }}
                            >

                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Income</th>
                                    <th>Loan Type</th>
                                    <th>Address</th>
                                    <th>EMI</th>
                                </tr>

                            </thead>

                            <tbody>

                                {users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>${user.income}</td>
                                        <td>{user.loanType}</td>
                                        <td>{user.address}</td>
                                        <td>${user.emi}</td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>


            {/* FOOTER */}

            <footer
                style={{
                    background: "#0b1f3a",
                    color: "#fff",
                    marginTop: "50px",
                    padding: "15px",
                    textAlign: "center",
                    borderTop: "2px solid #ffc107"
                }}
            >

                <p style={{ margin: "0" }}>
                    © 2026 LoanSwift Admin Panel
                </p>

            </footer>

        </div>

    )

}

export default AdminDashboard