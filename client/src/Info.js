
import React from "react";
import franceImg from "./images/france.png";
import britishImg from "./images/british.png";
import userImg from "./images/user.png";
import playImg from "./images/playstore.png";
import introImg from "./images/intro-img.jpg";
import Signup from "./Signup";
import { ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.min.css';
function Info() {
  
  return (
    <>
      <ToastContainer position="top-center" />
      <header className='bg-overlay'></header>
      <div className='container'>
        <div className='row'>
          <div className='search'>
            <input
              type='text'
              className='searchTerm'
              placeholder='How can we help you?'
            />

            <i className='fa fa-search'></i>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 intro-col'>
              <h2 className='intro-heading'>
                Full knowledge of all your documents as they go
              </h2>
              <p className='intro-text pt-4'>
                Document tracking software, also known as DMS (Document
                Management System), is a computer program that helps you store,
                find, manage, edit, and control your organizational documents in
                a single place.
              </p>
              <div className='row'>
                <span className='col-lg-6 intro-icon p-3 '>
                  <i className='fa fa-file'></i>
                  <p className='icon-text text-left mt-5'>
                    Know exactly where your files are at any given time of the
                    day and be at peace as we treat them . Read more
                  </p>
                </span>
                <span className='col-lg-6 intro-icon p-3'>
                  <i className='fa fa-medkit'></i>
                  <p className='icon-text text-left mt-5'>
                    We peruse thoroughly to vet emergencies from everyday cases
                    because our mission is to save lives. Read more
                  </p>
                </span>
              </div>
              <div className='intro-img mt-5'>
                <img src={introImg} alt='' />
                <p className='img-text p-4'>
                  Most infected people will develop mild to moderate illness and
                  recover without hospitalization. Read more
                </p>
              </div>
              <div className='mt-4'>
                <h6 className='intro-minor'>Terms and conditions*</h6>
                <p className='intro-minor'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea
                </p>
              </div>
            </div>
            <div className='col-lg-6 login-form'>
            <img src={userImg} alt='' className='form-avatar' />
              <Signup/>
              <div className='register-links mt-4 pt-4'>
                <span className='register-link'>
                  <a href='#' className='not-registered'>
                    Not Registered?
                  </a>
                  <a href='#' className='register'>
                    Register Now
                  </a>
                </span>
              </div>

              <div className='app-links row justify-content-between align-items-center mt-5 pt-5'>
                <img src={playImg} alt='' />

                <img src={playImg} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='footer pt-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 text-left'>
              <ul className='footer-list'>
                <li>Help Center</li>
                <li className='mt-4'>How to create an account</li>
                <li>How to track document processing progress</li>
                <li>How to retrieve password</li>
                <li>How to change password</li>
              </ul>
            </div>

            <div className='col-lg-6 text-right'>
              <ul className='footer-list'>
                <li>
                  <span className='footer-info'>Address:</span> N°8, Rue 3038
                  quartier du Lac
                </li>
                <li className='mt-4'>
                  <span className='footer-info'></span> (Yaoundé III)
                </li>

                <li className='mt-4'>
                  <span className='footer-info'>Telephone:</span> (00237) 222 23
                  04 68
                </li>
              </ul>
            </div>
          </div>
          <div className='row mt-3 footer-flag'>
            <div className='col-lg-2'>
              <img src={britishImg} alt='' />
              <img src={franceImg} alt='' />
            </div>

            <div className='col-lg-7 text-center'>
              <span> &copy; 2022 | Ministry of public health - Cameroon</span>
            </div>
            <div className='col-lg-3 text-end'>
              <div className='social-links'>
                <a href='#' className='social'>
                  <i className='fa fa-facebook'></i>
                </a>
                <a href='#' className='social'>
                  <i className='fa fa-twitter'></i>
                </a>

                <a href='#' className='social'>
                  <i className='fa fa-linkedin'></i>
                </a>
                <a href='#' className='social'>
                  <i className='fa fa-youtube-play'></i>
                </a>
                <a href='#' className='social'>
                  <i className='fa fa-envelope'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Info;
