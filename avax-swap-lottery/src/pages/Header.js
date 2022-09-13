import React from 'react'

const Header = () => {
  return (
    <section id="home" className="hero-section">
            <div className="shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
            <div className="container">                                                      
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="hero-content-wrapper">
                            <h1 className="text-white wow fadeInDown" data-wow-delay=".2s">Trade, Stake and win Lottery on AvaxSpeedySwap</h1>
                            <p className="text-white wow fadeInLeft"  data-wow-delay=".4s">Swap your tokens and play lottery on AvaxSpeedySwap,
                                 with the speed and low cost features on the Avalanche network.</p>
                            <a href="#" className="theme-btn wow fadeInUp"  data-wow-delay=".6s">Connect wallet</a>
                            <a href="swap.html" className="theme-btn wow fadeInUp theme-btnhover"  data-wow-delay=".6s">Trade Now</a>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="hero-img">
                            <img src="assets/img/hero-img.svg" alt="" className="wow fadeInRight"  data-wow-delay=".5s" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Header