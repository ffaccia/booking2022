import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react'
import { format } from "date-fns";
import SearchItem from '../../components/searchItem/SearchItem'
import { DateRange } from 'react-date-range';
import useFetch from "../../hooks/useFetch.js"



const List = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [dates, setDates] = useState(location.state.dates)
    const [options, setOptions] = useState(location.state.options)
    const [openDate, setOpenDate] = useState(false)
    const [min, setMinPrice] = useState(undefined)
    const [max, setMaxPrice] = useState(undefined)

    const limit = 20
    const city = encodeURIComponent(`${destination}`)
    const min_ = min || 0
    const max_ = max || 99999
    const limit_ = limit || 20

    const url = `/hotels/findHotel?city=${city}&min=${min_}&max=${max_}&limit=${limit_}`
    //console.log(url)
    const { data, loading, error } = useFetch(url)
    //useFetch(`/hotels/findHotel?city=${encodeURIComponent()}`)

    const handleSearch = () => {
        //refetch()
    }

    //console.log(data)


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
                            <input type="text" id="destination-id"
                                onChange={(e) => setDestination(e.target.value)}
                                placeholder={destination}
                            />
                        </div>
                        <div className="lsItem">
                            <label htmlFor="checkin-date-id">Check-in Date</label>
                            <span className="setDateList" onClick={() => setOpenDate(!openDate)}>
                                {format(dates[0].startDate, "MM/dd/yyyy")} to 
                                {format(dates[0].endDate, "MM/dd/yyyy")}</span>
                            {openDate && (<DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDates([item.selection])}
                                ranges={dates}
                                minDate={new Date()}
                            />
                            )}
                        </div>

                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptionItem">
                                <span>Min price <small>(per night)</small></span>
                                <input type="number" onChange={(e) => setMinPrice(e.target.value)} min={1} />
                            </div>
                        </div>

                        <div className="lsItem">
                            <div className="lsOptionItem">
                                <span>Max price <small>(per night)</small></span>
                                <input type="number" onChange={(e) => setMaxPrice(e.target.value)} />
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
                        <button type="submit" onClick={() => handleSearch}>Search</button>
                    </div>

                    <div className="listResult">
                        {loading ? ("loading...please wait.") :
                            <> {data.map((item) => (
                                <SearchItem item={item} key={item._id} />
                            ))}
                            </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List