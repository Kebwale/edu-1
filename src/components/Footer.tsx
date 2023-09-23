function Footer() {
    return (
        <footer className="page-footer white">
            <div className="footer-copyright">
                <div className="container txt">
                    Сделано с помощью {}
                    <a
                        className="red-text txt"
                        href="https://materializecss.com/"
                        target="_blank"
                    >
                        Materialize-css
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
