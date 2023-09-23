import { useNavigate } from "react-router-dom";

interface NavbarLinkProps {
    name: string;
    route: string;
    setIsVisible: (isVisible: boolean) => void;
}

function NavbarLink(props: NavbarLinkProps) {
    const navigate = useNavigate();

    const changeRoute = () => {
        navigate(props.route);
        props.setIsVisible(false);
    };

    return (
        <li
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
            }}
        >
            <div
                onClick={changeRoute}
                className="waves-effect waves-teal btn-flat"
                style={{
                    margin: "15px 0",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                }}
            >
                {props.name}
            </div>
        </li>
    );
}

export default NavbarLink;
