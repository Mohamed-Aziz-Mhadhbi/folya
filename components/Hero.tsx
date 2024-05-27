
const Hero = () => {
    return (
        <section className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 hero-col col-sm-12">
                        <div className="hero-content">
                            <h1>
                                Best Outcome for <span>Every Patient !!!</span>
                            </h1>
                            <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The point
                                of using.
                            </p>
                            <div className="hero-btn">
                                <ul>
                                    <li>
                                        <a href="#" className="btn1">
                                            Get Started
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.youtube.com/watch?v=9_nyG2TUDcQ"
                                            className="play-btn mfp-iframe"
                                        >
                                            <img
                                                className="wave1"
                                                src="images/play-btn.png"
                                                alt="play-btn"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero