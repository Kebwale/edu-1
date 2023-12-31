import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

import MainPage from "./components/MainPage.tsx";
import Matomo from "./components/Matomo.tsx";
import PlausibleAnalytics from "./components/PlausibleAnalytics.tsx";
import FathomAnalytics from "./components/FathomAnalytics.tsx";
import GoAccess from "./components/GoAccess.tsx";
import Ackee from "./components/Ackee.tsx";

import "materialize-css/dist/css/materialize.min.css";
import "./css/style.css";

function App() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            <Router>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100vh",
                    }}
                >
                    <Navbar />
                    <main
                        className="container"
                        style={{
                            flex: "1",
                        }}
                    >
                        <Routes>
                            <Route path="/edu-1/" element={<MainPage />} />
                            <Route path="/edu-1/matomo" element={<Matomo />} />
                            <Route
                                path="/edu-1/plausible"
                                element={<PlausibleAnalytics />}
                            />
                            <Route
                                path="/edu-1/fathom"
                                element={<FathomAnalytics />}
                            />
                            <Route
                                path="/edu-1/go_access"
                                element={<GoAccess />}
                            />
                            <Route path="/edu-1/ackee" element={<Ackee />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
            <div>
                {isVisible && (
                    <div
                        className="waves-effect waves-light btn black-text white"
                        style={{
                            position: "fixed",
                            right: "30px",
                            bottom: "40px",
                            zIndex: "1000",
                        }}
                        onClick={scrollToTop}
                    >
                        Back to top
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
