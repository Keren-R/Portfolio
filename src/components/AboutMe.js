export function AboutMe(){
    return(
        <div id="about-me" className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={require("../images/pikachu.jpg")} className="d-block mx-lg-auto img-fluid profile-pic" alt="Keren Reshef"
                         loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Hi, i'm Keren Reshef</h1>
                    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                        world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                        responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
}