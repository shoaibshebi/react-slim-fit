import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
    return (
        
             <section className="p-4 bg-light mb-5">
       <div className="container-fluid p-4">
            <div className="row text-center">
                <div className="col">
                    <h1 className="text-warning text-capitalize">contact us</h1>
                    <p>lorem ipsum Project.json Migration to MSBuild/C</p>
                </div>
            </div> 
            <div className="row justify-content-center">
                <div className="col-md-6 form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 form-group">
                    <label>Password:</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
             <div className="row justify-content-center">
                <div className="col-md-6">
                    <input type="submit" value="submit" className="btn border-warning bg-light text-warning"/>
                </div>
            </div>
           
          
        </div>
        
    </section>
        
    )
}
