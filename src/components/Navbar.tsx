import { useState, useEffect, useRef } from "react";

import NavbarLink from "./NavbarLink.tsx";

import Logo from "../assets/Logo.png";

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const sidebarRef = useRef<HTMLUListElement | null>(null);

    const openLink = () => {
        const awesomeLink =
            "https://github.com/awesome-selfhosted/awesome-selfhosted#software";
        window.open(awesomeLink, "_blank");

        setIsVisible(false);
    };

    const toggleSideBar = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                isVisible &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as HTMLElement)
            ) {
                setIsVisible(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isVisible]);

    return (
        <nav className="white" role="navigation">
            <div className="nav-wrapper container">
                <div
                    onClick={toggleSideBar}
                    className="brand-logo logo-cursor div-logo left sidenav-trigger"
                >
                    <img className="image" src={Logo} alt="site logo"></img>
                </div>
                <ul
                    style={{
                        display: "flex",
                    }}
                    className="right hide-on-med-and-down"
                >
                    <div
                        onClick={openLink}
                        className="waves-effect waves-teal btn-flat"
                        style={{
                            margin: "15px 0 ",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.2rem",
                        }}
                    >
                        awesome
                    </div>
                    <NavbarLink
                        name="Главная"
                        route="/edu-1/"
                        setIsVisible={setIsVisible}
                    />
                </ul>

                <ul
                    ref={sidebarRef}
                    className="sidenav"
                    style={{
                        transform: isVisible
                            ? "translateX(0%)"
                            : "translateX(-105%)",
                    }}
                >
                    <NavbarLink
                        name="Главная"
                        route="/edu-1/"
                        setIsVisible={setIsVisible}
                    />
                    <div
                        onClick={openLink}
                        className="waves-effect waves-teal btn-flat"
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.2rem",
                        }}
                    >
                        awesome
                    </div>

                    <NavbarLink
                        name="Matomo"
                        route="/edu-1/matomo"
                        setIsVisible={setIsVisible}
                    />
                </ul>
                <div>Меню</div>
            </div>
        </nav>
    );
}

export default Navbar;
