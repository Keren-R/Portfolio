export function AboutMe(){
    function handleResumeClick(){
        const resumePath = require("../media/Keren_Reshef_CV.pdf");
        window.open(resumePath, '_blank')
    }

    return(
        <div id="about-me" className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={process.env.PUBLIC_URL + "/static/keren.jpeg"} className="d-block mx-lg-auto img-fluid profile-pic" alt="Keren Reshef"
                         loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Hi, i'm Keren Reshef</h1>
                    <p className="lead">I am a FullStack developer proficient in Python, React, JavaScript, HTML and CSS. <br />
                        Experienced in Django, Pytest, AWS, Docker, CI/CD, GitHub and Agile/Scrum development. <br />
                        I am a problem-solver and quick learner, capable of understanding and working with complex systems and architectures from the top abstract level down to the actual implementation.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={handleResumeClick}>Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
}