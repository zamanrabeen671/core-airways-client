import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

let bg = ['bg-success', 'bg-success', 'bg-success', 'bg-success', 'bg-success', 'bg-success', 'bg-success', 'bg-success', 'bg-success', 'bg-success', 'bg-success', 'bg-success']
const Seats = () => {
    let [ticketCount, setTicketCount] = useState(0);
    const [bookedSeat, setBookedSeat] = useState([]);
    const [userDetails, setUserDetails] = useContext(UserContext);
    // let [passengerDetails, setPassengerDetails] = useState({});
    const handleSeat = (seatNo) => {

        if (ticketCount <= 4) {
            console.log("seat clicked", seatNo)
            setTicketCount(++ticketCount);
            bookedSeat.push(seatNo);
            setBookedSeat(bookedSeat);
        }
        else {
            alert('You can not booked 5 more tickets')
        }
    }
    const seatHandler = () => {

        fetch('https://evening-brushlands-14234.herokuapp.com/seat', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({seats:bookedSeat})
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data)
                }
            })
    }

    return (
        <div className="container">
            <Header />

            <div className="box-container mt-5 text-center mr-auto">
                <h2>Please choose a seat except RED</h2>
                <p>Your seats are : {bookedSeat.map(seat => <button className="btn btn-warning mr-2">{seat}</button>)}</p>
                <div className="row">
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg[0]}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(1)}>
                        1
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg[1]}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(2)}>
                        2
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg[2]}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(3)}>
                        3
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg[3]}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(4)}>
                        4
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg[4]}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(5)}>
                        5
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg[5]}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(6)}>
                        6
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg[6]}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(7)}>
                        7
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg[7]}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(8)}>
                        8
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg[8]}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(9)}>
                        9
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg[9]}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(10)}>
                        10
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg[10]}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(11)}>
                        12
                    </div>
                    <div className={`col-md-3 d-flex justify-content-center mx-2 my-2 ${bg[11]}`} style={{ border: '1px solid black', cursor: 'pointer' }} onClick={() => handleSeat(12)}>
                        12
                    </div>

                </div>

                <Link to="/payment">
                    <button onClick={() => seatHandler()}>Done</button>
                </Link>
            </div>
        </div>
    );
};

export default Seats;