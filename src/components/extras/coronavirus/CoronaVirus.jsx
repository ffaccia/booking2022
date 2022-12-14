import React from 'react'
import "./coronavirus.css"
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
    faStar,
  } from "@fortawesome/free-solid-svg-icons";

const CoronaVirus = () => {

    const [openCorona, setOpenCorona] = useState(true)

    return (
        <>  
            {console.log("opencorona val ", openCorona)}

            {openCorona && (<div className="coronaVirusInfo">
                <div className="firstRow">
                    <svg className="bk-icon -streamline-info_sign" fill="<TMPL_V bui_color_complement>" height="24" width="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                    <h3>Assistenza Coronavirus (COVID-19)</h3>
                </div>
                <h5 className="coronaVirusIndication">Ricevi indicazioni di viaggio ed eventuali informazioni sulle restrizioni agli spostamenti prima di partire.</h5>
                <FontAwesomeIcon onClick={() => setOpenCorona(!openCorona)} className="coronaVirusXMark" icon={faCircleXmark} />
            </div> )}
        </>
    )
}

export default CoronaVirus        