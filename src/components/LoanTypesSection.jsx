import { User, Home, Briefcase, GraduationCap } from "lucide-react";

const loans = [
    {
        icon: User,
        title: "Personal Loan",
        desc: "Quick personal loans with flexible repayment options and minimal documentation."
    },
    {
        icon: Home,
        title: "Home Loan",
        desc: "Make your dream home a reality with competitive interest rates."
    },
    {
        icon: Briefcase,
        title: "Business Loan",
        desc: "Fuel your business growth with tailored financing solutions."
    },
    {
        icon: GraduationCap,
        title: "Education Loan",
        desc: "Invest in your future with affordable education financing."
    }
];

const styles = {
    section: {
        padding: "80px 0",
        backgroundColor: "#f8f9fa"
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: "10px"
    },
    subtitle: {
        textAlign: "center",
        color: "#6c757d",
        marginBottom: "50px"
    },
    card: {
        border: "1px solid #eaeaea",
        borderRadius: "10px",
        padding: "25px",
        transition: "0.3s",
        backgroundColor: "#fff",
        height: "100%"
    },
    iconBox: {
        width: "55px",
        height: "55px",
        borderRadius: "10px",
        background: "#FFD000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
        color: "#000"   // change to black
    },
    applyLink: {
        color: "#FFD000",
        fontWeight: "600",
        textDecoration: "none"
    }
};

const LoanTypesSection = () => {
    return (
        <section id="loans" style={styles.section}>
            <div className="container">

                <h2 style={styles.title}>
                    Our <span style={{ color: "#FFD000" }}>Loan</span> Products
                </h2>

                <p style={styles.subtitle}>
                    Choose from our wide range of loan products designed for every need.
                </p>

                <div className="row">

                    {loans.map((loan, index) => {
                        const Icon = loan.icon;

                        return (
                            <div className="col-md-6 col-lg-3 mb-4" key={index}>
                                <div
                                    style={styles.card}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = "translateY(-8px)";
                                        e.currentTarget.style.boxShadow =
                                            "0 10px 25px rgba(0,0,0,0.1)";
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = "translateY(0px)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <div style={styles.iconBox}>
                                        <Icon size={28} />
                                    </div>

                                    <h5 className="fw-bold">{loan.title}</h5>

                                    <p className="text-muted" style={{ fontSize: "14px" }}>
                                        {loan.desc}
                                    </p>

                                    <a href="#apply" style={styles.applyLink}>
                                        Apply Now →
                                    </a>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default LoanTypesSection;