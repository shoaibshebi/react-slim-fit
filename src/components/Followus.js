import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


export default function Followus() {
    return (
        <section className="bg-secondary mb-0 mt-0">
            <div className="container-fluid">
                <div className="row text-center">
                         <div className="col">
                             <h1 className="text-warning text-capitalize">Follow Us on</h1>
                             
                         </div>
                 </div> 
                <div className="row">
                     <div className="col">
                          <div className="text-center mb-2  ">
                             <a href="#" className="mx-5"><i className="fab fa-facebook fa-2x"></i></a>
                             <a href="#"  className="mx-5"><i className="fab fa-youtube text-danger fa-2x"></i></a>
                             <a href="#"  className="mx-5"><i className="fab fa-twitter fa-2x"></i></a>
                             <a href="#" className="mx-5"><i className="fab fa-instagram text-danger fa-2x"></i></a>
                         </div>
                         <p className="text-light py-4 text-center">&copy;copyright created by shoaib</p>
                     </div>
                     
                 </div>
            </div>
     </section>
    )
}
