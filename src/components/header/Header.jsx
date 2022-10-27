import "./header.css"
//import ScriptTag from 'react-script-tag';
import React, { useState, useContext } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { faBed, faPlane, faCar, faLandmark, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import CoronaVirus from "../extras/coronavirus/CoronaVirus";
import { SearchContext } from "../../context/SearchContext.js"
import useScript from '../../hooks/useScript';

function CallScriptConditionally({scriptName}) {
    console.log("called script ", scriptName)
    //useScript('./optionsVerify.js');
    useScript(scriptName);
    return null;
}

const Header = ({ type }) => {

    //useScript('./headerSubmitVerify.js');

    const [destination, setDestination] = useState(false)

    const [openDate, setOpenDate] = useState(false)

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 1,
        room: 1
    })

    const handleOptions = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const { dispatch } = useContext(SearchContext)
    const navigate = useNavigate()

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
        navigate("/hotels", { state: { destination, dates, options } })
    }



    return (
        <div className="header">

            <CoronaVirus />

            <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faLandmark} />
                        <span>Museum</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxi</span>
                    </div>
                </div>


                {type != "list" &&
                    <>  <CallScriptConditionally scriptName='./headerSubmitVerify.js' />
                        
                        <h1 className="headerTitle">A lifetime of discounts? It's genius</h1>



                        <p className="headerDesc">
                            Get rewarded for your travels - unlock instant saving of 10% or more with
                            a lamabooking account
                        </p>

                        <button className="headerBtn">Sign in / Register</button>

                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input type="text" placeholder="Where are you going?"
                                    className="headerSearchInput"
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText headerSearchDate2Date">
                                    {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")} `}
                                </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    className="headerSearchDate"
                                    minDate={new Date()}
                                />}

                            </div>


                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText headerSearchRoom">
                                    {`${options.adult} adult . ${options.children} children . ${options.room} room `}
                                </span>
                                {openOptions && <div className="options">

                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.adult < 1}
                                                className="optionCounterButton buttonMinus" onClick={() => handleOptions('adult', 'd')}>-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton buttonPlus" onClick={() => handleOptions('adult', 'i')}>+</button>
                                        </div>
                                    </div>

                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.children < 1}
                                                className="optionCounterButton buttonMinus" onClick={() => handleOptions('children', 'd')}>-</button>
                                            {/*<span className="optionCounterNumber">{options.children.toString().padStart(2)}</span> */}
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton buttonPlus" onClick={() => handleOptions('children', 'i')}>+</button>
                                        </div>
                                    </div>

                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.room < 1}
                                                className="optionCounterButton buttonMinus" onClick={() => handleOptions('room', 'd')}>-</button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton buttonPlus" onClick={() => handleOptions('room', 'i')}>+</button>
                                        </div>
                                    </div>

                                <CallScriptConditionally scriptName='./optionsVerify.js'/>

                                </div>}
                            </div>

                            <div className="headerSearchItem">
                                <button id="handleSearch" className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>

                        </div>
                    </>}

            </div>
        </div>
    )
}

export default Header