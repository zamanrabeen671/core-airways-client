import { React, useEffect, useState, } from 'react';
import Header from '../Header/Header';
import FlightCard from '../FlightCard/FlightCard';
import fakeData from '../fakedata/fakedata';

const BusinessClass = () => {
    const [Flight, setFlight] = useState([]);

    useEffect(() => {
       setFlight(fakeData);
    },[])
    return (
        <div className="container">
            <Header />

            <div className="box-container">
                <div className="row">
                    {
                        Flight.map(data => <FlightCard data={data} key={data.id}></FlightCard>)

                    }
                </div>
            </div>
        </div>
    );
};

export default BusinessClass;