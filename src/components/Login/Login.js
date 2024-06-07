import React from 'react'
import './Login.css' // Custom CSS file for styling
import Jpanther from '../../assets/images/j-panther-logo.png'
import JindalLogo from '../../assets/images/jindal-logo-revised-2@2x.png'
import Night_vigilane from '../../assets/images/night-vigilance_logo-2.png'
import Google_Icon from '../../assets/images/google-icon.png'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS

const Login = () => {
  return (
    <div className="login-container">
      <header>
        <div className="container-fluid position-sticky top-0">
          <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-fixed my-3 py-2 start-0 end-0 mx-4">
            <div className="container-fluid pe-0">
              <a
                className="navbar-brand font-weight-bolder ms-lg-0 ms-3"
                href="#"
              >
                <img
                  src={Jpanther}
                  className="navbar-brand-img"
                  alt="Jindal Panther Logo"
                  width="15%"
                />
              </a>
              <ul className="navbar-nav">
                <li className="nav-item justify-content-right">
                  <a className="nav-link align-items-right" href="#">
                    <img
                      src={JindalLogo}
                      className="navbar-brand-img"
                      alt="Jindal Logo"
                      width="70%"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <section>
          <div className="page-header index-content">
            <div className="container-fluid main-container">
              <div className="row">
                <div className="col-md-6 d-none d-md-block basic-shape-polygon">
                  <div className="oblique position-absolute top-0 h-100 me-n8">
                    <div
                      className="oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                      style={{
                        backgroundImage: "url('../../assets/images/bg.jpg')",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 p-5 col-md-6 d-flex flex-column">
                  <div
                    className="card card-plain pb-5"
                    style={{ border: 'none', marginTop: '20%' }}
                  >
                    <div className="col text-center">
                      <img
                        src={Night_vigilane}
                        width="100"
                        className="img-fluid"
                        alt="Night Vigilance Logo"
                      />
                    </div>
                    <div className="card-body p-2 px-4 mt-5">
                      <h6 className="font-weight-bolder text-dark text-center">
                        Click on the below SSO Link
                      </h6>
                      <form role="form">
                        <div className="text-center">
                          <a
                            href="index.html"
                            className="btn btn-secondary mt-0 mb-0 form-control"
                          >
                            <img
                              src={Google_Icon}
                              width="10%"
                              alt="Google Icon"
                            />{' '}
                            Google
                          </a>
                        </div>
                      </form>
                      <p
                        className="mt-3 text-center"
                        style={{ fontFamily: 'roboto' }}
                      >
                        © 2024 Jindal Steel & Power | All Rights Reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footerr p-3 bg-dark fixed-bottom">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-12 mb-lg-0 py-1 text-center">
              <span className="text-white">
                &copy; {new Date().getFullYear()} Jindal Steel & Power | All
                Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Login
