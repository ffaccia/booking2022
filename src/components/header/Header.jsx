import "./header.css"
import React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { faBed, faPlane, faCar, faLandmark, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";

const Header = ({ type }) => {

    const [destination, setDestination] = useState(false)

    const [openDate, setOpenDate] = useState(false)

    const [date, setDate] = useState([
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

    const navigate = useNavigate()

    const handleSearch = () => { navigate("/hotels", { state: { destination, date, options } }) }


    return (
        <div className="header">
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
                    <>
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
                                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}
                                </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
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
                                                className="optionCounterButton" onClick={() => handleOptions('adult', 'd')}>-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOptions('adult', 'i')}>+</button>
                                        </div>
                                    </div>

                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.children < 1}
                                                className="optionCounterButton" onClick={() => handleOptions('children', 'd')}>-</button>
                                            {/*<span className="optionCounterNumber">{options.children.toString().padStart(2)}</span> */}
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={() => handleOptions('children', 'i')}>+</button>
                                        </div>
                                    </div>

                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.room < 1}
                                                className="optionCounterButton" onClick={() => handleOptions('room', 'd')}>-</button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={() => handleOptions('room', 'i')}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>

                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>

                        </div>
                    </>}

            </div>
        </div>
    )
}

export default Header