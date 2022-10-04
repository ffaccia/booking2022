import React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { format } from "date-fns";
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import SearchItem from '../../components/searchItem/SearchItem'
import { DateRange } from 'react-date-range';

import "./list.css"

const List = () => {

    const location = useLocation()
    const [destination, useDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    const [openDate, setOpenDate] = useState(false)

    console.log(location)

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">
                            Search
                        </h1>
                        <div className="lsItem">
                            <label htmlFor="destination-id">Destination</label>
                            <input type="number" id="destination-id"
                                placeholder={destination}
                            />
                        </div>
                        <div className="lsItem">
                            <label htmlFor="checkin-date-id">Check-in Date</label>
                            <span className="setDateList" onClick={() => setOpenDate(!openDate)}>{format(date[0].startDate, "MM/dd/yyyy")} to {format(date[0].endDate, "MM/dd/yyyy")}</span>
                            {openDate && (<DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}

                                ranges={date}

                                minDate={new Date()}
                            />
                            )}
                        </div>

                        <div className="lsItem">

                            <label>Options</label>
                            <div className="lsOptionItem">
                                <span>Min price <small>(per night)</small></span>
                                <input type="number" min={1} />
                            </div>
                        </div>

                        <div className="lsItem">
                            <div className="lsOptionItem">
                                <span>Max price <small>(per night)</small></span>
                                <input type="number" />
                            </div>
                        </div>

                        <div className="lsItem">
                            <div className="lsOptionItem">
                                <span>Adult </span>
                                <input type="number" min={1} placeholder={options.adult} />
                            </div>
                        </div>

                        <div className="lsItem">
                            <div className="lsOptionItem">
                                <span>Children</span>
                                <input type="number" min={0} placeholder={options.children} />
                            </div>
                        </div>

                        <div className="lsItem">
                            <div className="lsOptionItem">
                                <span>Room</span>
                                <input type="number" min={1} placeholder={options.room} />
                            </div>
                        </div>

                        <button type="submit">Search</button>
                    </div>
                    
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List