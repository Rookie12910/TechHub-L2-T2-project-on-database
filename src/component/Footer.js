import React from 'react';

export default function Footer()
{
    return(
        <div className="align-bottom" style={{color:'white',background:'black'}}>
        <hr />
        <div className="d-flex justify-content-center card-color">
          <div className="align-middle mt-4">
            <div className="text-center">
             <h3> Created by <span className="badge bg-warning text-black">Rakesh</span> and <span className="badge bg-danger text-black">Rifti</span> </h3>
            </div>
            <div className="text-center align-middle">
              <p><b><h3>Contact us </h3> </b> </p>
             <p><b>Mobile -  01903041177,01776039843</b></p>
             <p><b>Email - rakeshdebnath12910@gmail.com </b></p>
             <p> <h3>Thank you! </h3></p>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    )
}