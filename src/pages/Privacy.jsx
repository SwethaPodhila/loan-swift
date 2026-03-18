import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />

            <div style={styles.container}>
                <div style={styles.card}>
                    <h1 style={styles.title}>Privacy Policy</h1>
                    <p style={styles.date}>Last Updated: March 2026</p>

                    <section style={styles.section}>
                        <h2 style={styles.heading}>1. Information We Collect</h2>
                        <p>
                            We may collect personal information such as your name,
                            email address, phone number, and usage data when you
                            use our website or services.
                        </p>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.heading}>2. How We Use Your Information</h2>
                        <p>
                            We use your information to provide, improve, and
                            personalize our services. This includes communication,
                            support, and enhancing user experience.
                        </p>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.heading}>3. Sharing of Information</h2>
                        <p>
                            We do not sell or trade your personal information.
                            Your data may be shared with trusted services only
                            when necessary to operate our platform.
                        </p>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.heading}>4. Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect
                            your personal data from unauthorized access or misuse.
                        </p>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.heading}>5. Cookies</h2>
                        <p>
                            We may use cookies to improve user experience,
                            analyze traffic, and customize content.
                        </p>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.heading}>6. Your Rights</h2>
                        <p>
                            You have the right to access, update, or delete your
                            personal data at any time.
                        </p>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.heading}>7. Changes to This Policy</h2>
                        <p>
                            We may update this policy from time to time. Changes
                            will be posted on this page.
                        </p>
                    </section>

                    <section style={styles.section}>
                        <h2 style={styles.heading}>8. Contact Us</h2>
                        <p>
                            If you have any questions, please contact us at:
                            <span style={styles.email}> support@example.com</span>
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    );
};

const styles = {
    container: {
        background: "linear-gradient(135deg, #0b1d3a, #142f5c)",
        padding: "60px 20px",
        minHeight: "100vh",
        marginTop: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        maxWidth: "900px",
        backgroundColor: "#ffffff",
        padding: "35px",
        borderRadius: "16px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
        lineHeight: "1.7",
        borderTop: "6px solid rgb(255, 208, 0)"
    },
    title: {
        textAlign: "center",
        marginBottom: "10px",
        color: "#0b1d3a",
        fontWeight: "700"
    },
    date: {
        textAlign: "center",
        fontSize: "14px",
        color: "#777",
        marginBottom: "25px"
    },
    section: {
        marginBottom: "22px",
        paddingBottom: "10px",
        borderBottom: "1px solid #eee"
    },
    heading: {
        color: "#0b1d3a",
        marginBottom: "8px",
        position: "relative"
    },
    email: {
        color: "rgb(255, 208, 0)",
        fontWeight: "600"
    }
};

export default PrivacyPolicy;