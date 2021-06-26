import React from 'react';
import Header from '../Header/Header';

import economyImage from '../../assets/image/economy.jpg';
import businessImage from '../../assets/image/business.jpg';
import { useHistory } from 'react-router';
const Home = () => {
    const history = useHistory();
    return (
        <div className="container">
            <Header />
            <div className="text-white text-center p-5">
                <h4>Explore your Journey By Core Airways</h4>
                <p>lorem is jam lorem is jam lorem is jam lorem is jam lorem is jam lorem is jam lorem is jam lorem is jam lorem is jam lorem is jam lorem is jam lorem is jam lorem is jam,lorem is jam lorem is jam lorem is jam lorem is jam </p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="box-container text-center">
                        <img src={economyImage} alt="ship" className="img-fluid img-container" />
                        <h2>Economy Class</h2>
                        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        <button className="btn btn-primary" onClick={() => history.push('/booking/economy')}>Book</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="box-container text-center">
                        <img src={businessImage} alt="ship" className="img-fluid img-container" />
                        <h2>Business Class</h2>
                        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                        <button className="btn btn-primary" onClick={() => history.push('/booking/business')}>book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;