
import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import CheckButton from "../../components/buttons/CheckButton";
import { useState } from  'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
    faStar,
  } from "@fortawesome/free-solid-svg-icons";
import "./hotel.css";

const Hotel = () => {


    const photos = [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ];
    
      const [slideNumber, setSlideNumber] = useState(0)
      const [openModal, setOpenModal] = useState(false)

      const handleOpen = (i) => {
        setSlideNumber(i)
        setOpenModal(true)
      };
    
      const handleMove = (direction) => {
        let newSlideNumber;
        console.log(direction);
 
        if (direction === 'l') {
            newSlideNumber = slideNumber===0 ? photos.length-1 : slideNumber-1
        } else {
            newSlideNumber = slideNumber===photos.length-1 ? 0 : slideNumber+1
        }

        setSlideNumber(newSlideNumber)
      }



            
      return (
        <div>
            <Navbar />
            <Header type="list" />

                {openModal && (<div className="slider">

                            <FontAwesomeIcon id="arrowLeft" icon={faCircleArrowLeft}  onClick={() => handleMove("l")} className="slider-arrow slider-arrow-left"/>
        
                            <FontAwesomeIcon id="arrowClose" icon={faCircleXmark} onClick={() => setOpenModal(false)} className="slider-xmark slider-xmark-close" />
                            <div className="sliderWrapper">
                                <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                            </div>

                        <FontAwesomeIcon id="arrowRight" icon={faCircleArrowRight} onClick={() => handleMove("r")} className="slider-arrow slider-arrow-right" />

                </div>)}

                <div className="hotelContainer">
                <div className="hotelWrapper">
                    <div className="hotelDesc">
                        <div className="hotelTitle">
                            <h1>Grand Hotel Excelsior</h1>
                            <div className="hotelAddress">
                                <span className="hotelTitleFontAwe"><FontAwesomeIcon icon={faLocationDot} size="sm" /></span>
                                <span>Via del Corso n.29</span>
                            </div>

                            <div className="hotelDistance">
                                <span className="middot"></span><span>Excellent location. Within the city center</span>
                            </div>
                            <div className="hotelPriceHighlight">
                            <span className="hotelTitleFontAwe"><FontAwesomeIcon icon={faStar} size="lg" /></span> <span>Book a stay over 114$ and get a free airport taxi ride</span>
                            </div>
                        </div>
                        <div className="checkButtonWrapper">
                            <CheckButton title="Reserve or Book Now!" />
                        </div>
                    </div>
                    

                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImageWrapper" key={i}>
                                <img src={photo.src} alt="" 
                                    onClick={() => handleOpen(i)}
                                    className="hotelImg" 
                                />
                            </div>
                        ))}
                    </div>
                
                    <div className="hotelDetails">
                        <div className="hotelDetailTexts">
                            <h1 className="hotelTitle">Stay in the heart of City</h1>
                            <p className="hotelDesc">
                                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                Street Apartments has accommodations with air conditioning and
                                free WiFi. The units come with hardwood floors and feature a
                                fully equipped kitchenette with a microwave, a flat-screen TV,
                                and a private bathroom with shower and a hairdryer. A fridge is
                                also offered, as well as an electric tea pot and a coffee
                                machine. Popular points of interest near the apartment include
                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                airport is John Paul II International Kraków–Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid
                                airport shuttle service.
                            </p>
                            
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> <span className="hotelDetailsPriceLighter">(9 nights)</span>
                            </h2>
                            <CheckButton title="Reserve or Book now!" /> 
                        </div>
                    </div>
                </div>                
            </div>
            <MailList />
            <Footer />
        </div>    
    )
}

export default Hotel

