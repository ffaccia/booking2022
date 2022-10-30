import "./checkButton.css";
import { useNavigate, useContext } from "react"
import { AuthContext } from "../../context/AuthContext";
import { useNavigationType } from "react-router";

const CheckButton = ({ title, reserve }) => {

    const navigate = useNavigate()

    const handleReserve = () => {
        if (user) {

        } else {
            navigate("/login")
        }
    }
    const { user } = useContext(AuthContext)


    return (
        <>
            {
                (reserve === "true") ?
                    <button onclick={handleReserve} className="siCheckButton">{title}</button>
                    :
                    <button className="siCheckButton">{title}</button>
            }
        </>)
}

export default CheckButton