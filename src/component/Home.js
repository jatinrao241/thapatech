import React from "react";


const Home =()=>{
    return(
        <>
            <div id="home" className="home">
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-md-7 text-center" data-aos="flip-right">
                            <div className="image-text">
                                <h1>FIXED MINDSET</h1>
                                <h5>DESIGN . DEVELOPMENT . BRANDING</h5>
                                <h1>NEXT LEVEL DESIGNING IS DONE</h1>
                                <h5>WE ARE THE ONE OF THE WORLD'S TOP CREATIVE DESIGN AGENCIES.</h5>
                                <h2>TIME AND TIDE WAIT FOR NO MAN</h2>
                                <h5 className="mb-5">THERE IS NO SUBSTITUTE FOR HARD WORK.</h5>
                            </div>
                            <button href="/" className="share">Share<i className="fas fa-share"></i></button>
                            <button href="/" className="share">Comment<i className="fas fa-comment"></i></button>
                        </div>
                        <div className="col-md-5 image-image" data-aos="fade-down">
                            <p>
                                <img src="./image/thapa1.jpg" alt="thapa1" height="auto" width="100%"/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;