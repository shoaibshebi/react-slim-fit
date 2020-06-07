import React,{Fragment} from 'react'
import './banner2.css';
import "bootstrap/dist/css/bootstrap.min.css";



export default function Banner2() {
    return (
    <Fragment>
        <div className="banner-back">
            <div className="banner">

	            <div className="all-logo">
	                <p className="logo "><i  className="fa fa-biking fa-2x feather "></i></p>
	                <p id="comp-name" className="ml-2">Slim Fit</p>
	            
	            </div>
	             <ul className="navbar">
	               <li><p className="dash"></p>Home</li>
	               <li><p className="dash"></p>About</li>
	               <li><p className="dash"></p>Contact</li>
	               <li><p className="dash"></p>Classes</li>
	               <li><p className="dash"></p>Trainers</li>
	               <li><p className="dash"></p>Blog</li>
	               <li><p className="dash"></p>Products</li>
	             </ul>
	                <div className="content">
	                    <h1>Want To Get Slim Fit</h1>
	                    <button className="btn">Join Now</button>
	                </div>
            </div>
        </div>

        <section >
	        <div className="container">
	        	<div className="row mt-5 mb-5 justify-content-center">
	        		<div className="col-md-6"><p className="line2 "></p><h1 className="ml-2 ">WHAT WE OFFER</h1></div>
	        		<div className="col-md-6"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod </i></div>
	        	</div>
	        </div>
        </section>
        <section >
	        <div className="container">
	        	<div className="row mt-5 mb-5 justify-content-center">
	        		<div className="col-md-6 line-before" ><h1 id="expect" className="mr-2 ">WHAT WE EXPECT</h1><p className="line3"></p></div>
	        		<div className="col-md-6"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod amet, consectetur adipiscing elit, sed do eiusmod  consectetur adipiscing elit, sed do eiusmod </i></div>
	        		<div className="col-md-6 line-after"><h1 id="expect" className="mr-2 ">WHAT WE EXPECT</h1><p className="line3"></p></div>
	        	</div>
	        </div>
        </section>
    </Fragment>
    )
}
