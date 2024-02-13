import {NavElement} from "./NavElement";
import {headerData} from "./data/HeaderData";

export function Header(){
    return(
        <header>
            <div className="px-3 py-2 border-bottom App-header">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/"
                           className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-black text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                                <use xlinkHref="#bootstrap"></use>
                            </svg>
                        </a>

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li><NavElement data={headerData["home"]} /></li>
                            <li><NavElement data={headerData["aboutMe"]} /></li>
                            <li><NavElement data={headerData["skills"]} /></li>
                            <li><NavElement data={headerData["projects"]} /></li>
                            <li><NavElement data={headerData["contactMe"]} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}