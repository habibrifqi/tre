import React,{useEffect,useState} from 'react'
import './home.css'
import Modal from './modal';
import vidio from '../../Assets/p1.mp4'
import{BiMap,BiLogoTwitter} from "react-icons/bi";
import{HiFilter} from "react-icons/hi";
import{TfiFacebook} from "react-icons/tfi";
import{AiFillInstagram} from "react-icons/ai";
import{SiTripadvisor} from "react-icons/si";
import{TbApps} from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
  // add scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  const [maxPrice, setMaxPrice] = useState(5000);
  const handlePriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value, 10);
    setMaxPrice(newMaxPrice);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk membuka modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  return (
   <section className='home'>
    <div className="overlay"></div>
    <video src={vidio} muted autoPlay loop type="vidio/mp4"></video>

    <div className="homeContent container">
      <div className="textDiv">
        <span data-aos="fade-up" className="smallText">
          Our Packages
        </span>
        <h1 data-aos="fade-up" className="homeTitle">
          Search your Holiday
        </h1>
      </div>

      <div data-aos="fade-up"  className="cardDiv grid">
        <div className="destinationInput">
          <label htmlFor="city">Search your destination:</label>
          <div className="input flex">
            <input type="text" placeholder='Enter ...' />
            <BiMap className="icon" />
          </div>
        </div>
        <div className="dateInput">
          <label htmlFor="city">Select your date:</label>
          <div className="input flex">
            <input type="date" />
            {/* <BiMap className="icon" /> */}
          </div>
        </div>
        <div className="priceInput">
         <div className="label_total flex">
          <label htmlFor="price">Max price:</label>
          <h3 className="total">${maxPrice}</h3>
         </div>
         <div className="input flex">
          <input type="range" max="5000" min="1000" value={maxPrice}
          onChange={handlePriceChange} />
         </div>
        </div>

        <div className="searchOptions flex" onClick={openModal}>
            <HiFilter className="icon" />
            <span >MORE FILTERS</span>
        </div>
      </div>
      <div data-aos="fade-up" className="homeFooterIcons flex">
        <div className="rightIcons">
          <TfiFacebook className="icon"/>
          <AiFillInstagram className="icon"/>
          <BiLogoTwitter className="icon"/>
        </div>
        <div className="leftIcons">
          <SiTripadvisor className="icon"/>
          <TbApps className="icon"/>
        </div>
      </div>
    </div>
    {isModalOpen && <Modal onClose={closeModal} />}
   </section>
   
  )
}

export default Home
