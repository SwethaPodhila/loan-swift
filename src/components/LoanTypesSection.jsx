import {
  User,
  Home,
  Briefcase,
  GraduationCap,
  Car,
  Bike,
  Gem
} from "lucide-react";

const loans = [
  {
    icon: User,
    title: "Personal Loan",
    desc: "Quick personal loans with flexible repayment options and minimal documentation.",
    color: "#FACC15"
  },
  {
    icon: Home,
    title: "Home Loan",
    desc: "Make your dream home a reality with competitive interest rates.",
    color: "#FACC15"
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    desc: "Fuel your business growth with tailored financing solutions.",
    color: "#FACC15"
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    desc: "Invest in your future with affordable education financing.",
    color: "#FACC15"
  },
  {
    icon: Gem,
    title: "Gold Loan",
    desc: "Get instant cash against your gold with quick approvals.",
    color: "#FACC15"
  },
  {
    icon: Car,
    title: "Car Loan",
    desc: "Drive your dream car with easy EMI options and low interest rates.",
    color: "#FACC15"
  },
  {
    icon: Bike,
    title: "Bike Loan",
    desc: "Own your favorite bike with affordable financing plans.",
    color: "#FACC15"
  }
];

const styles = {
  section: {
    padding: "80px 0",
    background: "linear-gradient(180deg,#f8fafc,#ffffff)"
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "36px"
  },
  subtitle: {
    textAlign: "center",
    color: "#6c757d",
    marginBottom: "50px"
  },
  card: {
    border: "1px solid #eaeaea",
    borderRadius: "12px",
    padding: "25px",
    transition: "0.35s",
    backgroundColor: "#fff",
    height: "100%"
  },
  iconBox: (color) => ({
    width: "55px",
    height: "55px",
    borderRadius: "12px",
    background: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    color: "#000"
  }),
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
                      "0 15px 35px rgba(0,0,0,0.12)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >

                  <div style={styles.iconBox(loan.color)}>
                    <Icon size={26} />
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