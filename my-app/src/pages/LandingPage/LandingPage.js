import React from "react";
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ILLUSTRATION from "../../Assets/ILLUSTRATION.png"
import Group117 from "../../Assets/Group117.png"


const LandingPage = () => {

    return (
      <>
        <div className="landing-con">
          <div className="search__con">
            <div className="input__items">
              <FontAwesomeIcon icon={faSearch} color="var(--bs-blue)" />
              <input
                type="search"
                placeholder="Search a Term | Topic"
                className="search__input"
              />
            </div>
          </div>

          <div className="section__first">
              <h1 className = "section__first--heading" >Claim a Free Quote</h1>
              <div className = "section__first__grid">
                  <div className = "section__first__grid--letf " >
                       <p className = "section__heading">Get started on fulfilling</p>
                       <div className = "under__line" ></div>
                       <p className = "section__heading--bottom">your Dubai or UAE dream.</p>
                       {/* <p className = "section__heading--bottom">dream.</p> */}
                       <div className = "section__first__grid--right--mobile__view">
                         <img src = {ILLUSTRATION} style={{width:"100%"}} />
                       </div>

                       <h1 className = "section__first--heading">UAE & Offsho Company</h1>

                        <p className = "com-p">
                            We provide you with information about UAE or offshore company & help you
                            setup your company with a bank account and visas.
                        </p>
                      <div className = "section__first__grid__btn__con" >
                        <button className = "section__first__grid--btn--one" >Start a Company</button>
                        <button className = "section__first__grid--btn--two" >Re new a Company</button>
                      </div>
                  </div>
                  <div className = "section__first__grid--right">
                         <img src = {ILLUSTRATION} style={{width:"100%"}} />
                  </div>


              </div>
            <div className = "section__first__footer" >
              <h1 className = "section__first--heading" >Watch the video about UAE or offshore Company Registraction</h1>
              <img src = {Group117} height="40px" />
            </div>
          </div>
        </div>
      </>
    );
}

export default LandingPage;