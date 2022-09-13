import React from 'react'

const Nav = () => {
  return (
    <header className="header navbar-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a style={{color: 'white'}} className="" href="index.html">
                                AvaxSpeedySwap
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="page-scroll active" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#about">Info</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#service">Trade</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#roadmap">Lottery</a>
                                    </li>
                                    
                                    <li className="nav-item ">
                                        <a className="page-scroll">
                                            <button className="theme-btn  btn-primary btn-sm">
                                            Connect wallet
                                            </button>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </nav> 
                    </div>
                </div> 
            </div> 
        
        </header>
  )
}

export default Nav