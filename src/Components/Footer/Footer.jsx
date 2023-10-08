import React,{useEffect} from "react";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { TfiFacebook } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import "./footer.css";
import video2 from "../../Assets/p3.mp4";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small> Keep In Touch</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email" />
            <button className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" />
                Travel .
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              nisi ipsam vel, voluptatibus deserunt eos. Similique nisi aperiam,
              suscipit deserunt maxime assumenda odit minima dolorum voluptate.
              Impedit fugiat quae modi.
            </div>
            <div className="footerSosials flex">
              <TfiFacebook className="icon" />
              <AiFillInstagram className="icon" />
              <AiFillYoutube className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* g1 */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">Our Agency</span>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Sevices
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Torism
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Payment
              </li>
            </div>
            {/* g2 */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">Patners</span>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Sevices
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Torism
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Payment
              </li>
            </div>
            {/* g3 */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">Boking</span>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Sevices
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Torism
              </li>
              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Payment
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>Rifqi Error</small>
            <small>Ooh Uuh Ouhh</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
