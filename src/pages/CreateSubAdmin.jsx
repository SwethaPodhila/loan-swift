import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function CreateSubAdmin() {
    const [isAuthorized, setIsAuthorized] = useState(true);

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [subAdmins, setSubAdmins] = useState([]);
    const [editId, setEditId] = useState(null);

    const token = localStorage.getItem("adminToken");
    console.log("TOKEN FROM LOCALSTORAGE:", token);

    const fetchSubAdmins = async () => {
        console.log("FETCH CALL START");

        const res = await fetch("https://loan-swift-backend.onrender.com/auth/sub-admins", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log("RESPONSE STATUS:", res.status);

        const data = await res.json();
        console.log("RESPONSE DATA:", data);

        setSubAdmins(data.subAdmins);
    };

    useEffect(() => {

        if (!token) {
            alert("Please login first");
            navigate("/admin/login");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            console.log("DECODED TOKEN:", decoded);

            if (decoded.role !== "super_admin") {
                setIsAuthorized(false);
            } else {
                fetchSubAdmins();
            }

        } catch (err) {
            console.log("TOKEN ERROR:", err);
            navigate("/admin/login");
        }

    }, []);

    useEffect(() => {
        fetchSubAdmins();
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // CREATE / UPDATE
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("FORM DATA:", form);
        console.log("TOKEN:", token);

        const url = editId
            ? `https://loan-swift-backend.onrender.com/auth/sub-admin/${editId}`
            : "https://loan-swift-backend.onrender.com/auth/create-sub-admin";

        const method = editId ? "PUT" : "POST";

        const res = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(form)
        });

        console.log("CREATE/UPDATE STATUS:", res.status);

        const data = await res.json();
        console.log("CREATE/UPDATE RESPONSE:", data);

        if (res.ok) {
            alert(editId ? "Updated Successfully" : "Created Successfully");
            setForm({ email: "", password: "" });
            setEditId(null);
            fetchSubAdmins();
        } else {
            alert(data.message);
        }
    };

    // DELETE
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure?")) return;

        console.log("DELETE ID:", id);
        console.log("TOKEN:", token);

        const res = await fetch(`https://loan-swift-backend.onrender.com/auth/sub-admin/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log("DELETE STATUS:", res.status);

        if (res.ok) {
            alert("Deleted Successfully");
            fetchSubAdmins();
        }
    };

    // EDIT
    const handleEdit = (admin) => {
        setForm({
            email: admin.email,
            password: ""
        });
        setEditId(admin._id);
    };

    if (!isAuthorized) {
        return (
            <div style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#0b1f3a",
                color: "white",
                fontSize: "22px"
            }}>
                🚫 You don't have permission to access this page
            </div>
        );
    }

    return (
        <div style={{
            background: "linear-gradient(135deg,#0b1f3a,#132f57)",
            minHeight: "100vh",
            padding: "30px"
        }}>

            <div className="container">

                <div className="d-flex justify-content-between mb-4">
                    <h3 className="text-white">Sub Admin Management</h3>

                    <button
                        className="btn btn-light"
                        onClick={() => navigate("/admin/dashboard")}
                    >
                        ⬅ Back
                    </button>
                </div>

                {/* FORM */}
                <div className="card p-4 mb-4">
                    <h5>{editId ? "Update Sub Admin" : "Create Sub Admin"}</h5>

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-5">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-5">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-control"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-2">
                                <button className="btn btn-warning w-100">
                                    {editId ? "Update" : "Create"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* TABLE */}
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        Sub Admin List
                    </div>

                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {subAdmins && subAdmins.length > 0 ? (
                                    subAdmins.map((admin, index) => (
                                        <tr key={admin._id}>
                                            <td>{index + 1}</td>
                                            <td>{admin.email}</td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-primary me-2"
                                                    onClick={() => handleEdit(admin)}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => handleDelete(admin._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center text-muted">
                                            🚫 No Sub Admins Found
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateSubAdmin;