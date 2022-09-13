import React from 'react'

const Feature = () => {
  return (
    <section id="feature" className="feature-section pt-150">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-8 mx-auto">
                        <div className="section-title text-center mb-55">
                            <h2 className="mb-20 wow fadeInUp" data-wow-delay=".2s">AvaxLottery</h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">Play and win Avax on AvaxLottery in 3 simple steps.</p>
                        </div>
                    </div>
                </div>
                <div className="features-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-feature text-center mb-30 wow fadeInUp" data-wow-delay=".2s">
                                <div className="feature-img mb-20">
                                    <img src="assets/img/feature-1.svg" alt="" />
                                </div>
                                <div className="feature-content">
                                    <h5>Buy Tickets</h5>
                                    <p>Each ticket is equivalent to 5USD in Avax per ticket.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-feature text-center mb-30 wow fadeInUp" data-wow-delay=".4s">
                                <div className="feature-img mb-25">
                                    <img src="assets/img/feature-2.svg" alt="" />
                                </div>
                                <div className="feature-content">
                                    <h5>Wait for the Round</h5>
                                    <p>A round lasts for 12hours everyday.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-feature text-center mb-30 wow fadeInUp" data-wow-delay=".6s">
                                <div className="feature-img mb-20">
                                    <img src="assets/img/feature-3.svg" alt="" />
                                </div>
                                <div className="feature-content">
                                    <h5>Check your Prizes</h5>
                                    <p>Once the round is over, come back to check if you have won</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Feature