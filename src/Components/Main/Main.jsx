import React,{useEffect} from 'react'
import './main.css'

// import image
import img from '../../Assets/img(1).jpg.jpg'
import img2 from '../../Assets/img(2).jpg.jpg'
import img3 from '../../Assets/img(3).jpg.jpg'
import img4 from '../../Assets/img(4).jpg.jpg'
import img5 from '../../Assets/img(5).jpg.jpg'

import{GrLocation} from 'react-icons/gr'
import{HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Data =[
  {
    id:1,
    imgSrc:img,
    desTitle: 'Bora Bora',
    location: 'bantul',
    grade: 'nice So',
    fees: '$700',
    description: 'lorem ipsoum',
  },
  {
    id:1,
    imgSrc:img2,
    desTitle: 'Bora Bora',
    location: 'bantul',
    grade: 'nice So',
    fees: '$700',
    description: 'lorem ipsoum',
  },
  {
    id:1,
    imgSrc:img3,
    desTitle: 'Bora Bora',
    location: 'bantul',
    grade: 'nice So',
    fees: '$700',
    description: 'lorem ipsoum',
  },
  {
    id:1,
    imgSrc:img4,
    desTitle: 'Bora Bora',
    location: 'bantul',
    grade: 'nice So',
    fees: '$700',
    description: 'lorem ipsoum',
  },
  {
    id:1,
    imgSrc:img5,
    desTitle: 'Bora Bora',
    location: 'bantul',
    grade: 'nice So',
    fees: '$700',
    description: 'lorem ipsoum',
  }

]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destination
        </h3>
      </div>

      <div className="secContent grid">
        {/* start */}
        {
          Data.map(({id,imgSrc,desTitle,location,grade,fees,description}) =>{
            return(
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt="" />
                  
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">
                  {desTitle}
                  </h4>
                  <span className='continent flex'>
                    <GrLocation className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
