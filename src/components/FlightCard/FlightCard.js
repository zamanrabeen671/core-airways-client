import React, { useContext, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from '../../App';
const FlightCard = (props) => {
    const { from, destination, Time, economyBase, businessBase } = props.data;
    const { type } = useParams();
    const [startDate, setStartDate] = useState(new Date());
    console.log(props);
    const [userDetails, setUserDetails] = useContext(UserContext);
    const [passengerData, setPassengerData] = useState({
        from: from,
        destination: destination,
        time: Time,
        type: type,
        economyPrice: economyBase,
        businessPrice: businessBase,
        date: startDate,
        email: userDetails.email
    })
    console.log(userDetails.email)
    // setUserDetails(passengerData);
    // console.log(passengerData);

    const uploadFlightInfo = () => {

        fetch('https://evening-brushlands-14234.herokuapp.com/booking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(passengerData) 
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                console.log(data)
            }
        })
    }
    
    return (
        <div className="col-md-6">
            <div className="inside-box">
                <p> you are going from <span style={{ color: 'goldenrod', fontSize: '16px' }}>{from}</span> to <span>{destination}</span></p>
                <p>Ticket Fee : ${type === 'economy' ? economyBase : businessBase}</p>
                <div className="mt-3 p-2 d-flex justify-content-space-between">
                    <ReactDatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat = 'dd/MM/yyyy'
                    />
                    <p>{Time}</p>
                </div>
                <Link to="/seats">
                    <button className="btn btn-primary" onClick={() => uploadFlightInfo()}>Done</button>
                </Link>
            </div>
        </div>
    );
};

export default FlightCard;