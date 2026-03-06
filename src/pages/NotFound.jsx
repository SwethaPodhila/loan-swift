import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa"
    },
    box: {
        textAlign: "center"
    },
    title: {
        fontSize: "60px",
        fontWeight: "bold",
        marginBottom: "15px"
    },
    text: {
        fontSize: "22px",
        color: "#6c757d",
        marginBottom: "20px"
    }
};

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h1 style={styles.title}>404</h1>

                <p style={styles.text}>
                    Oops! Page not found
                </p>

                <a href="/" className="btn btn-primary">
                    Return to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;