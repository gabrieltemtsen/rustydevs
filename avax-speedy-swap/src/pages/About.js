import React from 'react'

const About = () => {
  return (
    <section id="about" className="about-section pt-150 pb-20">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img mb-30">
                            <img src="./assets/img/about-img.svg"  className=" wow fadeInLeft" data-wow-delay=".4s" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-content mb-30">
                            <div className="section-title mb-40">
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">About Us</h2>
                            </div>
                            <p className="mb-15 wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
                            <p className="mb-35 wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.</p>
                            <a href="#" className="theme-btn theme-btn-2 wow fadeInRight" data-wow-delay=".8s">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About