import React from 'react'

const Trade = () => {
  return (
    <section id="feature" className="feature-section pt-150">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-8 mx-auto">
                        <div className="section-title text-center mb-55">
                            <h2 className="mb-20 wow fadeInUp" data-wow-delay=".2s">AvaxTrade</h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">Quickly Exchange(SpeedySwap) your tokens on the Avalanche Network, Stake and earn APR.</p>
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
                                    <h5>Swap Tokens</h5>
                                    <p>With the high speed and scalability on the Avalanche Ecosystem, swap your tokens within seconds.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-feature text-center mb-30 wow fadeInUp" data-wow-delay=".4s">
                                <div className="feature-img mb-25">
                                    <img src="assets/img/feature-2.svg" alt="" />
                                </div>
                                <div className="feature-content">
                                    <h5>Stake in Pools</h5>
                                    <p>Lock you tokens in our featured Pools to earn returns and rewards.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-feature text-center mb-30 wow fadeInUp" data-wow-delay=".6s">
                                <div className="feature-img mb-20">
                                    <img src="assets/img/feature-3.svg" alt="" />
                                </div>
                                <div className="feature-content">
                                    <h5>Stake in Farms</h5>
                                    <p>Stake and add Liquidity in the farms to earn Avax</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Trade