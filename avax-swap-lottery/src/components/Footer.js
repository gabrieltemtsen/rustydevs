import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-5 footer pt-100 img-bg" >
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="footer-widget mb-60 wow fadeInLeft" data-wow-delay=".2s">
                           <h4> <a style={{color: 'white'}} href="index.html" className="logo mb-40">AvaxSpeedySwap</a> </h4>
                            <p className="mb-30">AvaxSpeedySwap the Future of Farming Finance.</p>
                            <div className="footer-social-links">
                                <ul>
                                    <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                    <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                    <li><a href="#"><i className="lni lni-instagram-original"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6">
                        <div className="footer-widget mb-60 wow fadeInUp" data-wow-delay=".4s">
                            <h4>Our Patners</h4>
                            <ul className="footer-links">
                                <li>
                                    <a href=''>AVALANCHE</a>
                                </li>
                                <li>
                                    <a href="">STACKUP</a>
                                </li>
                                <li>
                                    <a href="">QUICKNODE</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                   
                <div className="copyright-area">
                    <p className="mb-0 text-white text-center">Template By <a href="https://uideck.com" rel="nofollow" target="_blank">UIdeck</a></p>
                </div>
            </div>
        </footer>
  )
}

export default Footer