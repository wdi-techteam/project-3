import React from "react";
import github from './GitHub_Logo.png'
import mail from './email.png'

const Support = () => (

      <div>
            <h1 className="about"> Support </h1>

            <p className="we">
                  We have a strong commitment to providing quality support,
                  Please if you want to contact us:

                  <ul>
                        <li><span>Mr. Taha:<br /><a href="mailto:taha.sindi@gmail.com"> <img src={mail} alt="github logo" height='30px' /></a>
                              <a href="https://github.com/taha-sindi"><img className="git" src={github} alt="github logo" height='30px' /></a> </span> </li><br />

                        <li><span>Ms. Wijdan:<br /><a href="mailto:Wijdan.w.k@outlook.sa"> <img className="mail" src={mail} alt="github logo" height='30px' /></a>
                              <a href="https://github.com/wijdan1995"><img className="git" src={github} alt="github logo" height='30px' /></a>  </span></li><br />


                        <li><span>Ms. Amany:<br /><a href="mailto:amanyalattass@gmail.com"> <img src={mail} alt="github logo" height='30px' /></a>
                              <a href="https://github.com/AmanyAts"><img className="git" src={github} alt="github logo" height='30px' /></a>  </span></li><br />

                        <li><span>Ms. Maha:<br /> <a href="mailto:maha-ahmad@live.com"> <img src={mail} alt="github logo" height='30px' /></a>
                              <a href="https://github.com/MahaKarban"><img className="git" src={github} alt="github logo" height='30px' /></a></span>
                        </li>

                  </ul>
            </p>
      </div>);

export default Support;