import { Link } from "react-router-dom"
import CheckButton from "../buttons/CheckButton" 
import "./searchItem.css";

const SearchItem = ({item}) => {





    return (
        <div className="searchItem">
            <img
                src={item.photos[0]} // "https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <h3 className="siTitle">{item.city}</h3>
                <span className="siDistance">{item.distance}</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    {item.desc}
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                {item.rating && <div className="siRating">
                    <span>Excellent</span>
                    <button className="rating">{item.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">${item.cheapest}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton"
                        >See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;