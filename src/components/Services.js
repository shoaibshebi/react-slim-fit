import React from 'react';
import img1 from '../assets/img/w1.jpg'
import img2 from '../assets/img/w2.jpg'
import img3 from '../assets/img/w3.jpg'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Services() {
    return (
            <section classNameName="pr-m">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col text-center mb-3">
                            <h1>Zones</h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod amet Lorem ipsum dolor sit amet, </p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-sm-6">
                                <i className="fas fa-congs text-warning fa-6x"></i>
                                <i><img className="img-thumbnail" src={img1}/></i>
                                <h1>Iron Zone</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .</p>
                                <button className="btn btn-outline-warning">Learn more</button>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <i className="fas fa-congs text-warning fa-6x"></i>
                                <i><img className="img-thumbnail" src={img2}/></i>
                                <h1>Fitness Zone</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                <button className="btn btn-outline-warning">Learn more</button>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <i className="fas fa-congs text-warning fa-6x"></i>
                                <i><img className="img-thumbnail" src={img3}/></i>
                                <h1>Group Zone</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                <button className="btn btn-outline-warning">Learn more</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
    )
}
