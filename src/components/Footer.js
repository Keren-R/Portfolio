import {footerData} from "./data/FooterData";
import {NavElement} from "./NavElement";

export function Footer(){
    const currentYear = new Date().getFullYear()

    return (
        <div className="px-3 py-2 App-header">

        <div className="container">
            <footer className="d-flex justify-content-between align-items-center py-3 my-4 border-top border-black">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">

                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© {currentYear} Keren Reshef</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3 navbar-logo"><NavElement data={footerData["linkedin"]} /></li>
                    <li className="ms-3 navbar-logo"><NavElement data={footerData["github"]} /></li>
                </ul>
            </footer>
        </div>
        </div>
    );
}