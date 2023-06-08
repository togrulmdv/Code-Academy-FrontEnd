import "./navbar.css";

export function Navbar() {
    return (
        <div>
            <div className="navbar">
                <a href="randomlink" className="logo-name">
                    <img src="../public/img/blacklogo.png" alt="logo" className="logo" />
                    <div className="name">Black Man</div>
                </a>

                <div className="right-part">
                    <div className="insiderightpart">
                        <a href="randomlink" className="dribbble">Dribbble</a>
                        <a href="randomlink" className="linkedin">LinkedIn</a>
                        <a href="randomlink" className="about">About</a>
                        <a href="randomlink" className="contact">Contact</a>
                        <button>View Work</button>
                    </div>
                </div>
            </div>
        </div>
    )
}